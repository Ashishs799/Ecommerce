import React from "react";
import "../styles/Category.css";
import Sneaker from "../media/bluejordan1.jpg";
import Men from "../media/fashionmen.jpg";
import Women from "../media/fashionwoman.jpg";
import { Button } from "./Button";

export const Category = () => {
  return (
    <div className="category_section">
      <div className="wrapper">
        <h2>Discover More</h2>
        <div className="category flex">
          <div className="categories">
            <img src={Sneaker} alt="" />
            <div className="shop flex_column">
              <span>SHOP</span>
              <h1>Sneakers</h1>
            </div>
          </div>
          <div className="categories">
            <img src={Men} alt="" />
            <div className="shop flex_column">
              <span>SHOP</span>
              <h1>Men</h1>
            </div>
          </div>
          <div className="categories">
            <img src={Women} alt="" />
            <div className="shop flex_column">
              <span>SHOP</span>
              <h1>Women</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="black_screen flex">
        <div className="offer_img"></div>
        <div className="offer_desc flex_column ">
          <span>THIS WEEKEND ONLY</span>
          <h3>15% Off Sitewide</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit assumenda corrupti dolor enim, delectus distinctio eligendi quo expedita quasi beatae placeat doloribus qui excepturi!
          </p>
          <Button/>
        </div>
      </div>
    </div>
  );
};
