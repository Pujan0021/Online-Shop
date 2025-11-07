import SearchBar from "./SearchBar";
import "../Css/SearchBar.css";
import "../Css/NavBar.css";
const NavBar = ({ query, setQuery }) => {
  const handleSearch = (value) => {
    setQuery(value);
  };

  return (
    <div>
      <ul className="navBar">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <SearchBar onSearch={handleSearch} />
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
