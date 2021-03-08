import List from "component/List";
import { useEffect, useState } from "react";
import "./style.scss";

export default function Delete({ setEnable }) {
  const [data, setData] = useState([]);

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

  return (
    <div className="delete">
      {data.map((item, key) => (
        <List {...{ item, key, index: key, onDelete }} />
      ))}
    </div>
  );
}