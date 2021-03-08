import { BiRecycle } from "react-icons/bi";

import Tag from "component/Tag";
import "./style.scss";

export default function List({ item, index, onDelete }) {
  return (
    <div className="list-wrap flex">
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
        <div className="flex wrap">
          {item.data[0].keywords.map((name, key) => (
            <Tag {...{ name, key }} />
          ))}
        </div>
        <p className="list-description">{item.data[0].description}</p>
      </div>
      {onDelete && (
        <div onClick={() => onDelete(item)} className="selfCenter">
          <BiRecycle className="list-remove" />
        </div>
      )}
    </div>
  );
}
