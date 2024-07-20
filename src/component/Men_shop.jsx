import React from "react";
import "../styles/Men_shop.css";
import Men from "../media/brocade.png";
import { Button } from "./Button";

const Men_shop = () => {
  return (
    <div className="Men_shop">
      <div className="txt">
        <h1>Spring Summer Collection</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          soluta sequi quam doloremque sunt? Sed harum exercitationem facere
          similique eius enim, vero itaque consequuntur veniam accusamus libero,
          beatae quibusdam, ratione hic temporibus?
        </p>
        <Button />
      </div>
      <div>
        <img src={Men} alt="" />
      </div>
    </div>
  );
};

export default Men_shop;
