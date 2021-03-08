/* eslint-disable jsx-a11y/alt-text */
import Search from "component/Search";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Navigation({ setSearchText }) {
  return (
    <div className="nav-wrap flex spaceBetween">
      <div className="nav-left-wrap flex itemCenter">
        <Link to="/photos" className="nav-link flex itemCenter">
          <img
            className="nav-logo"
            src={require("resources/img/logo.svg").default}
          />
          <h1 className="nav-title">Photos</h1>
        </Link>
        <Link to="/like" className="nav-link">
          <p>Likes</p>
        </Link>
        <Link to="/delete" className="nav-link">
          <p>Deletes</p>
        </Link>
      </div>

      <div className="nav-right-wrap">
        <Search {...{ setSearchText }} />
      </div>
    </div>
  );
}
