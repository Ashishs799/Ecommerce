import React, { useEffect, useState } from "react";
import "./Sneaker.css";
import { Sorting } from "../component/Sorting";
import collections from "../Data/collections";
import { Link } from "react-router-dom";

export const Sneaker = () => {
  const shoes_data = collections.filter((shoes) => shoes.category === "shoes");
  const [sortData, setSortData] = useState(shoes_data);
  return (
    <section className="men_sec shoes_sec">
      <div className="box shoes_wrap">
        <span>Discover Sneakers from Sneakerzz</span>
        <br />
        <h1>Sneakers collection</h1>
      </div>
      <Sorting
        data={sortData}
        setData={setSortData}
        originalData={shoes_data}
      />
      <div className=" men_collection">
        {sortData.map((data) => {
          return (
            <div className="new_wrapper" key={data.id}>
              <Link to={`/product/${data.id}`}>
                <div className="new_arrivals">
                  <div className="latest">
                    <img src={data.image} alt="" />
                  </div>

                  <span>Quick Look</span>
                </div>
              </Link>

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
