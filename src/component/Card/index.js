/* eslint-disable jsx-a11y/alt-text */
import "./style.scss";

const Card = ({ item }) => {
  return (
    <div className="card-wrap">
      <img className="card-img" src={item.links[0].href} />
    </div>
  );
};

export default Card;
