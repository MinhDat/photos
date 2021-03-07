import "./style.scss";

const Search = ({ setSearchText }) => {
  const handleChange = (e) => setSearchText(e.target.value);

  return (
    <input
      className="search"
      placeholder="Search image"
      onChange={handleChange}
    />
  );
};

export default Search;
