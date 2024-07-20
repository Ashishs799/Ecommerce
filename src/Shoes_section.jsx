import React from "react";
import "./styles/Shoes_section.css";
import { Button } from "./component/Button";

const Shoes_section = () => {
  return (
    <div className="shoes_section">
      <div className="shoes_collection "></div>
      <div className="shoes">
        <h1>
          Step Into Comfort,
          <br />
          <span>Walk With Style!</span>
        </h1>
        <Button />
      </div>
    </div>
  );
};

export default Shoes_section;
