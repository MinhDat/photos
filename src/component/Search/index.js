import "./style.scss";

const Search = ({ setSearchText }) => {
  const handleChange = (e) => setSearchText(e.target.value);

  return (
    <input
      className="search"
      placeholder="Search everything..."
      onChange={handleChange}
    />
  );
};

export default Search;
