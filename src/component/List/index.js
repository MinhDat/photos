import { useHistory } from "react-router-dom";
import { BiRecycle } from "react-icons/bi";

import Tag from "component/Tag";
import "./style.scss";

export default function List({ item, index, onDelete }) {
  const routerHistory = useHistory();

  const handleDetail = () => {
    localStorage.setItem("showItem", JSON.stringify(item));

    const data = JSON.parse(localStorage.getItem("view") || "{}");
    data[item.data[0].nasa_id] = data[item.data[0].nasa_id]
      ? data[item.data[0].nasa_id] + 1
      : 1;
    localStorage.setItem("view", JSON.stringify(data));
    routerHistory.push("/detail");
  };

  const handleDelete = (e) => {
    if (onDelete) onDelete(item);
    e.stopPropagation();
  };

  return (
    <div className="list-wrap flex" onClick={handleDetail}>
      <div className="selfCenter list-index">#{index + 1}</div>
      <img
        {...{
          className: "list-img",
          src: item && item.links ? item.links[0]?.href : undefined,
          alt: "",
        }}
      />
      <div className="list-info column">
        <h3 className="list-title">{item.data[0].title}</h3>
        <p className="list-date">{item.data[0].date_created}</p>
        <div className="flex wrap">
          {item.data[0].keywords.map((name, key) => (
            <Tag {...{ name, key }} />
          ))}
        </div>
        <p className="list-description">{item.data[0].description}</p>
      </div>
      {onDelete && (
        <div onClick={handleDelete} className="selfCenter">
          <BiRecycle className="list-remove" />
        </div>
      )}
    </div>
  );
}
