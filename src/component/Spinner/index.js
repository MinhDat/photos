import "./style.scss";

const Spinner = ({ enable }) => (enable ? <div className="spinner" /> : null);

export default Spinner;
