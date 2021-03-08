import List from "component/List";
import { useEffect, useState } from "react";
import "./style.scss";

export default function Delete({ setEnable }) {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("");

  const onDelete = (item) => {
    let deletes = JSON.parse(localStorage.getItem("delete") || "[]");

    deletes = deletes.filter(
      (obj) => obj.data[0].nasa_id !== item.data[0].nasa_id
    );

    localStorage.setItem("delete", JSON.stringify(deletes));
    setData(deletes);
  };

  useEffect(() => {
    if (setEnable) setEnable(true);

    const sleepTime = 1000;
    let waitTime = sleepTime;
    const startTime = Date.now();

    const arrDelete = JSON.parse(localStorage.getItem("delete") || "[]");

    const currentTime = Date.now();
    waitTime = sleepTime - (currentTime - startTime);

    setTimeout(() => {
      setData(arrDelete);
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

  return (
    <div className="delete">
      <div className="flex end delete-select">
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">None</option>
          <option value="newest">Newest</option>
          <option value="lastest">Lastest</option>
        </select>
      </div>
      {data.map((item, key) => (
        <List {...{ item, key, index: key, onDelete }} />
      ))}
    </div>
  );
}
