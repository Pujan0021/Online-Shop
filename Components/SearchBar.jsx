import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
    }
  };

  return (
    <div className="bar">
      <input
        className="searchBox"
        type="text"
        placeholder="Search Product .."
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => onSearch(inputValue)} className="searchBtn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
