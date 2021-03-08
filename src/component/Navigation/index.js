/* eslint-disable jsx-a11y/alt-text */
import Search from "component/Search";
import { Link } from "react-router-dom";
import "./style.scss";

const SUB_DOMAIN = process.env.NODE_ENV === "production" ? "/photos" : "";

export default function Navigation({ setSearchText }) {
  return (
    <div className="nav-wrap flex spaceBetween">
      <div className="nav-left-wrap flex itemCenter">
        <Link to={`${SUB_DOMAIN}/`} className="nav-link flex itemCenter">
          <img
            className="nav-logo"
            src={require("resources/img/logo.svg").default}
          />
          <h1 className="nav-title">Photos</h1>
        </Link>
        <Link to={`${SUB_DOMAIN}/like`} className="nav-link">
          <p>Likes</p>
        </Link>
        <Link to={`${SUB_DOMAIN}/delete`} className="nav-link">
          <p>Deletes</p>
        </Link>
      </div>

      <div className="nav-right-wrap">
        <Search {...{ setSearchText }} />
      </div>
    </div>
  );
}
