import List from "component/List";
import NoResult from "component/NoResult";
import { useEffect, useState } from "react";
import "./style.scss";

export default function Like({ setEnable }) {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (setEnable) setEnable(true);

    const sleepTime = 1000;
    let waitTime = sleepTime;
    const startTime = Date.now();

    const arrLike = JSON.parse(localStorage.getItem("like") || "[]");

    const currentTime = Date.now();
    waitTime = sleepTime - (currentTime - startTime);

    setTimeout(() => {
      setData(arrLike);
      setDone(true);
      if (setEnable) setEnable(false);
    }, waitTime);
  }, []);

  useEffect(() => {
    let arrData = data || [];
    switch (sort) {
      case "newest":
        arrData.sort(
          (a, b) =>
            new Date(b.data[0].date_created) - new Date(a.data[0].date_created)
        );
        break;

      case "lastest":
        arrData.sort(
          (a, b) =>
            new Date(a.data[0].date_created) - new Date(b.data[0].date_created)
        );
        break;

      default:
        break;
    }
    setSort(arrData);
  }, [sort]);

  return data.length ? (
    <div className="like">
      <div className="flex end like-select">
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">None</option>
          <option value="newest">Newest</option>
          <option value="lastest">Lastest</option>
        </select>
      </div>
      {data.map((item, key) => (
        <List {...{ item, key, index: key }} />
      ))}
    </div>
  ) : (
    done && <NoResult />
  );
}
