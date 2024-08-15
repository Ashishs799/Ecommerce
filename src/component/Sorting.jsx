import React from "react";
import "../styles/Sorting.css";
export const Sorting = () => {
  return (
    <div className="sorting flex">
      <div className="sorting_wrapper">
        <span>Sort by: </span>
        <select name="" id="">
          <option value="">Default</option>
          <option value="">Name (A - Z)</option>
          <option value="">Name (Z - A)</option>
          <option value="">Price (Lowest - Highest)</option>
          <option value="">Price (Highest - Lowest)</option>
        </select>
      </div>
    </div>
  );
};
