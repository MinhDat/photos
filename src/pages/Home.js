import { useEffect, useState } from "react";

import apiKit from "utils/apiKit";
import photoApi from "utils/photoApi";
import { getWindowScreen } from "utils/common";
import { CARD_WIDTH } from "utils/constant";

import Card from "component/Card";

function Home() {
  const [search, setSearch] = useState("");
  const [arrData, setArrData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const handleData = (data) => {
    const columnLength = Math.floor((getWindowScreen() - 200) / CARD_WIDTH);

    const arrTmp = arrData;

    for (let i = 0; i < data.length; i++) {
      const index = (i + page * limit) % columnLength;
      if (arrTmp[index]) arrTmp[index].push(data[i]);
      else arrTmp[index] = [data[i]];
    }

    setArrData(arrTmp);
    console.log(arrTmp[0]);
  };

  useEffect(() => {
    apiKit
      .get(photoApi.search, { params: { q: `"${search}"` } })
      .then((res) => {
        handleData(
          res?.collection?.items.slice((page - 1) * limit, page * limit)
        );
      });

    setArrData([]);
  }, []);

  return (
    <div className="flex row center">
      {arrData.map((data, key) => (
        <div {...{ key }}>
          {data.map((item, index) => (
            <Card {...{ item, key: index }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Home;
