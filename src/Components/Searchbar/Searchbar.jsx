import "./Searchbar.css";
import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
const Searchbar = () => {
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const handleFocus = () => {
    setPlaceholderVisible(false);
  };

  const Fetch = () => {
    const [searchData, setSearchData] = useState([]);
    useEffect(() => {
      fetch("www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then((res) => res.json())
        .then((data) => setSearchData(data))
        .catch((err) => console.log("Fehler beim Laden der API", err));
    }, []);
  };

  return (
    <section className="searchbar">
      <div className="searchbar-box">
        <SearchIcon />
        <input
          name="searchbar"
          type="text"
          onFocus={handleFocus}
          placeholder={placeholderVisible ? "Search" : ""}
        />
      </div>
    </section>
  );
};

export default Searchbar;
