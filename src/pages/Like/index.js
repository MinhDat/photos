import List from "component/List";
import { useEffect, useState } from "react";
import "./style.scss";

export default function Like({ setEnable }) {
  const [data, setData] = useState([]);

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
      if (setEnable) setEnable(false);
    }, waitTime);
  }, []);

  return (
    <div className="like">
      {data.map((item, key) => (
        <List {...{ item, key }} />
      ))}
    </div>
  );
}
