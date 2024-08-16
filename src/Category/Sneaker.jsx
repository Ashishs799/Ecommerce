import React, { useEffect, useState } from "react";
import shoes_data from "../Data/shoes_data";
import "./Sneaker.css";
import { Sorting } from "../component/Sorting";

export const Sneaker = () => {
  const [sortData, setSortData] = useState(shoes_data);
  return (
    <section className="shoes_sec">
      <div className="box shoes_wrap">
        <span>Discover Sneakers from Sneakerzz</span>
        <br />
        <h1>Sneakers collection</h1>
      </div>
      <Sorting data={sortData} setData={setSortData} originalData = {shoes_data}/>
      <div className=" men_collection">
        {sortData.map((data) => {
          return (
            <div className="new_wrapper" key={data.id}>
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
