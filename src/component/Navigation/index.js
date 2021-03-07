/* eslint-disable jsx-a11y/alt-text */
import Search from "component/Search";
import "./style.scss";

const Navigation = () => (
  <div className="nav-wrap flex spaceBetween">
    <div className="nav-left-wrap flex">
      <img className="nav-logo" src={require("resources/logo.svg").default} />
      <h1 className="nav-title">Photos</h1>
    </div>
    <div className="nav-right-wrap">
      <Search />
    </div>
  </div>
);

export default Navigation;
