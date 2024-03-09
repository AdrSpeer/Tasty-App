import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
const SearchbarTwo = () => {
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  const handleFocus = () => {
    setPlaceholderVisible(false);
  };
  const [searchData, setSearchData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // ! Search Category
  useEffect(() => {
    if (searchInput) {
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`
      )
        .then((res) => res.json())
        .then((data) => setSearchData(data.meals))
        .catch((err) => console.log("Fehler beim Laden der API", err));
    } else {
      setSearchData([]);
    }
  }, [searchInput]);
  console.log(searchData);
  return (
    <section className="searchbar">
      <div className="searchbar-box">
        <SearchIcon />
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          name="searchbar"
          type="text"
          value={searchInput}
          onFocus={handleFocus}
          placeholder={placeholderVisible ? "Search" : ""}
        />
      </div>
      {searchData &&
        searchData.length > 0 &&
        searchData.slice(0, 5).map((meal) => (
          <div className="suggestions" key={meal.idMeal}>
            <p>{meal.strMeal}</p>
          </div>
        ))}
    </section>
  );
};

export default SearchbarTwo;
