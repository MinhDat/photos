/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";

import { nFormatter } from "utils/common";

import "./style.scss";

const Card = ({ item, onDelete }) => {
  const [isLike, setIsLike] = useState(item.like);

  const routerHistory = useHistory();

  const handleLike = (e) => {
    let data = JSON.parse(localStorage.getItem("like") || "[]");

    if (isLike) {
      data = data.filter((obj) => obj.data[0].nasa_id !== item.data[0].nasa_id);
    } else {
      data.push(item);
    }

    localStorage.setItem("like", JSON.stringify(data));
    setIsLike(!isLike);

    e.stopPropagation();
  };

  const handleRemove = (e) => {
    let data = JSON.parse(localStorage.getItem("delete") || "[]");

    data.push(item);

    localStorage.setItem("delete", JSON.stringify(data));
    if (onDelete) onDelete(item);

    e.stopPropagation();
  };

  const handleDetail = () => {
    localStorage.setItem("showItem", JSON.stringify(item));

    const data = JSON.parse(localStorage.getItem("view") || "{}");
    data[item.data[0].nasa_id] = data[item.data[0].nasa_id]
      ? data[item.data[0].nasa_id] + 1
      : 1;
    localStorage.setItem("view", JSON.stringify(data));
    routerHistory.push("/detail");
  };

  return (
    <div className="card-wrap" onClick={handleDetail}>
      <div className="card-info flex column spaceBetween">
        <div className="flex spaceBetween">
          <div onClick={handleLike}>
            {isLike ? (
              <AiTwotoneHeart className="card-like" />
            ) : (
              <AiOutlineHeart className="card-unlike" />
            )}
          </div>
          <div onClick={handleRemove}>
            <RiDeleteBin6Line className="card-remove" />
          </div>
        </div>
        <div className="flex spaceBetween">
          <p className="card-title flex">{item.data[0].title}</p>
          <span className="flex itemCenter">
            <p className="card-view">{nFormatter(item.view, 1)}</p>
            <BsFillEyeFill className="card-eye" />
          </span>
        </div>
      </div>
      <img
        className="card-img"
        src={item && item.links ? item.links[0]?.href : undefined}
      />
    </div>
  );
};

export default Card;
