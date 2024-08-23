import React, { useState } from "react";
import "../styles/Men.css";
import "../styles/LatestCollections.css";
import { Sorting } from "../component/Sorting";
import { Link, useParams } from "react-router-dom";
import collections from "../Data/collections";
export const Men = () => {
  const men_data = collections.filter((men) => men.category === "men");
  console.log("Men\n", men_data);
  const [sortData, setSortData] = useState(men_data);

  // console.log(collections);
  return (
    <section className="men_sec">
      <div className="box">
        <span>Discover Men's trend from Sneakerzz</span>
        <br />
        <h1>Men's collection</h1>
      </div>
      <Sorting data={sortData} setData={setSortData} originalData={men_data} />
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
