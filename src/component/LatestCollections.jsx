import React, { useEffect, useState } from "react";
import "../styles/LatestCollections.css";
import collections from "../Data/collections";
import { Link } from "react-router-dom";

const LatestCollections = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    function shuffleArray() {
      const shuffledObjects = [...collections];
      for (let i = shuffledObjects.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledObjects[i], shuffledObjects[j]] = [
          shuffledObjects[j],
          shuffledObjects[i],
        ];
      }
      return shuffledObjects;
    }
    const shuffledArray = shuffleArray();
    const randomSixObjects = shuffledArray.slice(0, 6);
    setNewArrivals(randomSixObjects);
  }, []);

  return (
    <div className="latest_wrapper p20-80">
      <h2>New Arrivals</h2>
      <div className="latest_collections">
        {newArrivals &&
          newArrivals.map((data) => {
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
                  <span>HUBA Tshirt</span>
                  <br />
                  <span>Rs. 2500</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LatestCollections;
