import "./SearchbarThree.css";
import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
const SearchbarThree = () => {
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

export default SearchbarThree;
