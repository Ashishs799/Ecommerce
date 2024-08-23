import React, { useState } from "react";
import "../styles/SearchBar.css";
import { RxCross1 } from "react-icons/rx";

import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router";

export const SearchBar = ({ hideSearchBar, hide }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };
  return (
    <div className={hide ? "search hide" : "search"}>
      <div className="input">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <CiSearch style={{ cursor: "pointer" }} onClick={handleSearch} />
      </div>
      <RxCross1 onClick={hideSearchBar} style={{ cursor: "pointer" }} />
    </div>
  );
};
