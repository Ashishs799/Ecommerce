import React, { useState } from "react";
import "../styles/Men.css";
import "../styles/LatestCollections.css";
import men_data from "../Data/men_data";
import { Sorting } from "../component/Sorting";

export const Men = () => {
  const [sortData, setSortData] = useState(men_data);
  console.log(men_data);
  return (
    <section className="men_sec">
      <div className="box">
        <span>Discover Men's trend from Sneakerzz</span>
        <br />
        <h1>Men's collection</h1>
      </div>
      <Sorting data={sortData} setData={setSortData} originalData = {men_data}/>
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
