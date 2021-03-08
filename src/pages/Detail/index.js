import { useEffect, useState } from "react";

import Tag from "component/Tag";

import "./style.scss";
import { numberWithCommas } from "utils/common";

export default function Detail({ setEnable }) {
  const [item, setItem] = useState({});
  const [view, setView] = useState({});

  useEffect(() => {
    if (setEnable) setEnable(true);

    const sleepTime = 1000;
    let waitTime = sleepTime;
    const startTime = Date.now();

    const arrLike = JSON.parse(localStorage.getItem("showItem") || "{}");
    const objView = JSON.parse(localStorage.getItem("view") || "{}");
    setView(objView);

    const currentTime = Date.now();
    waitTime = sleepTime - (currentTime - startTime);

    setTimeout(() => {
      setItem(arrLike);
      if (setEnable) setEnable(false);
    }, waitTime);
  }, []);

  return (
    <div className="detail flex">
      <div className="detail-left flex column">
        <img
          {...{
            className: "detail-img",
            src: item && item.links ? item.links[0]?.href : undefined,
            alt: "",
          }}
        />
        <h3>{item && item.data && item.data[0].title}</h3>
      </div>
      <div className="detail-right flex column">
        <div className="flex wrap">
          {item && item.data
            ? item.data[0]?.keywords?.map((name, key) => (
                <Tag {...{ name, key }} />
              ))
            : null}
        </div>
        <p className="detail-date">
          {item && item.data && item.data[0].date_created}
        </p>
        <p className="detail-info">
          <b>Nasa Id: </b>
          {item && item.data && item.data[0].nasa_id}
        </p>
        <p className="detail-info">
          <b>Center: </b>
          {item && item.data && item.data[0].center}
        </p>
        <p className="detail-info">
          <b>View: </b>
          {item &&
            item.data &&
            (numberWithCommas(view[item.data[0].nasa_id]) || 0)}
        </p>
        <p>{item && item.data && item.data[0].description}</p>
      </div>
    </div>
  );
}
