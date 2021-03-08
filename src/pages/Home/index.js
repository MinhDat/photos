import { useEffect, useState } from "react";

import apiKit from "utils/apiKit";
import photoApi from "utils/photoApi";
import { getWindowScreen } from "utils/common";
import { CARD_WIDTH } from "utils/constant";
import useDebounce from "hooks/debounce";

import Card from "component/Card";

import "./style.scss";

function Home({ setEnable, searchText }) {
  const [arrData, setArrData] = useState([]);
  const [page, setPage] = useState(1);
  const [enableSearch, setEnableSearch] = useState(false);
  const [limit] = useState(100);

  const debouncedSearchTerm = useDebounce(searchText, 350);

  const handleData = (data) => {
    const columnLength = Math.floor((getWindowScreen() - 200) / CARD_WIDTH);
    const arrLike = JSON.parse(localStorage.getItem("like") || "[]").map(
      (item) => item.data[0].nasa_id
    );

    const objView = JSON.parse(localStorage.getItem("view") || "{}");

    const arrRemove = JSON.parse(localStorage.getItem("delete") || "[]").map(
      (item) => item.data[0].nasa_id
    );

    const filterData = data.filter(
      (item) => !arrRemove.includes(item.data[0].nasa_id)
    );

    const arrTmp = page === 1 ? [] : arrData;

    for (let i = 0; i < filterData.length; i++) {
      const item = {
        ...filterData[i],
        like: arrLike.includes(filterData[i].data[0].nasa_id),
        view: objView[filterData[i].data[0].nasa_id] || 0,
      };
      const index = (i + page * limit) % columnLength;
      if (arrTmp[index]) arrTmp[index].push(item);
      else arrTmp[index] = [item];
    }

    setArrData(arrTmp);
  };

  const onDelete = (data) => {
    let arrTmp = arrData;
    for (let i = 0; i < arrData.length; i++) {
      arrTmp[i] = [
        ...arrData[i].filter(
          (item) => item.data[0].nasa_id !== data.data[0].nasa_id
        ),
      ];
    }

    setArrData([...arrTmp]);
  };

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement.scrollHeight
    ) {
      // Do load more content here!
      setPage(page + 1);
      if (setEnable) setEnable(true);
    }
  };

  const loadData = () => {
    const sleepTime = 2000;
    let waitTime = sleepTime;
    const startTime = Date.now();

    apiKit
      .get(photoApi.search, {
        params: { q: searchText ? searchText : `""`, page },
      })
      .then((res) => {
        const currentTime = Date.now();
        waitTime = sleepTime - (currentTime - startTime);
        setTimeout(() => {
          handleData(res?.collection?.items);
          if (setEnable) setEnable(false);
          window.removeEventListener("scroll", loadMore);
          window.addEventListener("scroll", loadMore);
        }, waitTime);
      });
  };

  useEffect(() => {
    if (setEnable) setEnable(true);
    setArrData([]);
  }, []);

  useEffect(() => {
    loadData();
  }, [page]);

  useEffect(() => {
    if (enableSearch) {
      setArrData([]);
      if (setEnable) setEnable(true);
      if (page !== 1) setPage(1);
      else loadData();
    } else {
      setEnableSearch(true);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="home flex row center">
      {arrData.map((data, key) => (
        <div {...{ key }}>
          {data.map((item, index) => (
            <Card {...{ item, key: index, onDelete }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Home;
