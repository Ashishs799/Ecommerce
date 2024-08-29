import React, { useEffect, useState } from "react";
import "./Women.css";
import { Sorting } from "../component/Sorting";
import collections from "../Data/collections";
import { Link } from "react-router-dom";

export const Women = () => {
  const women_data = collections.filter((women) => women.category === "women");
  const [sortData, setSortData] = useState(women_data);
  return (
    <section className="men_sec women_sec">
      <div className="box women_box">
        <span>Discover Women's trend from Sneakerzz</span>
        <br />
        <h1>Women's collection</h1>
      </div>
      <Sorting
        data={sortData}
        setData={setSortData}
        originalData={women_data}
      />
      <div className=" men_collection">
        {sortData.map((data) => {
          return (
            <div className="new_wrapper" key={data.id}>
              <div className="new_arrivals">
                <div className="latest">
                  <img src={data.image} alt="" />
                </div>

                <Link to={`/product/${data.id}`}>
                  <span>Quick Look</span>
                </Link>
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
