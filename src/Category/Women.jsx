import React, { useEffect, useState } from "react";
import women_data from "../Data/women_data";
import "./Women.css";
import { Sorting } from "../component/Sorting";

export const Women = () => {
  const [sortData, setSortData] = useState(women_data);
  return (
    <section className="women_sec">
      <div className="box women_box">
        <span>Discover Women's trend from Sneakerzz</span>
        <br />
        <h1>Women's collection</h1>
      </div>
      <Sorting data={sortData} setData={setSortData} originalData = {women_data}/>
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
