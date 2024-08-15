import React from "react";
import shoes_data from "../Data/shoes_data";
import "./Sneaker.css";
import { Sorting } from "../component/Sorting";

export const Sneaker = () => {
  return (
    <section className="shoes_sec">
      <div className="box shoes_wrap">
        <span>Discover Sneakers from Sneakerzz</span>
        <br />
        <h1>Sneakers collection</h1>
      </div>
      <Sorting />
      <div className=" men_collection">
        {shoes_data.map((data) => {
          return (
            <div className="new_wrapper">
              <div className="new_arrivals">
                <div className="latest">
                  <img src={data.image} alt="" />
                </div>
                <span>Quick Look</span>
              </div>

              <div className="info">
                <span>{data.name}</span>
                <br />
                <span>Rs. {data.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
