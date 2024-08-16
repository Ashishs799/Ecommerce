import React, { useEffect, useState } from "react";
import "../styles/Sorting.css";
export const Sorting = ({ data, setData, originalData }) => {
  const [sortBy, setSortBy] = useState("");

  const sortingBy = (data, sortBy) => {
    let sortedData;
    switch (sortBy) {
      case "ascending":
        return (sortedData = [...data].sort((a, b) =>
          a.name.localeCompare(b.name)
        ));
      case "descending":
        return (sortedData = [...data].sort((a, b) =>
          b.name.localeCompare(a.name)
        ));
      case "highest":
        return (sortedData = [...data].sort((a, b) => b.price - a.price));
      case "lowest":
        return (sortedData = [...data].sort((a, b) => a.price - b.price));
      case "default":
      default:
        return originalData;
    }
  };
  useEffect(() => {
    const sortedData = sortingBy(data, sortBy);
    setData(sortedData);
  }, [data, setData, sortBy]);
  return (
    <div className="sorting flex">
      <div className="sorting_wrapper">
        <span>Sort by: </span>
        <select
          name="sort"
          id="sort"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="default">Default</option>
          <option value="ascending">Name (A - Z)</option>
          <option value="descending">Name (Z - A)</option>
          <option value="lowest">Price (Lowest - Highest)</option>
          <option value="highest">Price (Highest - Lowest)</option>
        </select>
      </div>
    </div>
  );
};
