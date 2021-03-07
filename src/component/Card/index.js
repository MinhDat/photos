/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";
import "./style.scss";

const Card = ({ item, onDelete }) => {
  const [isLike, setIsLike] = useState(item.like);

  const handleLike = () => {
    let data = JSON.parse(localStorage.getItem("like") || "[]");

    if (isLike) {
      data = data.filter((obj) => obj.data[0].nasa_id !== item.data[0].nasa_id);
    } else {
      data.push(item);
    }

    localStorage.setItem("like", JSON.stringify(data));
    setIsLike(!isLike);
  };

  const handleRemove = () => {
    let data = JSON.parse(localStorage.getItem("remove") || "[]");

    data.push(item);

    localStorage.setItem("remove", JSON.stringify(data));
    if (onDelete) onDelete(item);
  };

  return (
    <div className="card-wrap">
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
          <span className="card-view">
            611 <BsFillEyeFill />
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
