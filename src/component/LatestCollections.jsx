import React from "react";
import "../styles/LatestCollections.css";
import latest1 from "../media/huba1.webp";
import latest2 from "../media/brocade1.webp";
import latest3 from "../media/justculture.jpg";
import latest4 from "../media/tayson_black.jpg";
import latest5 from "../media/tshirt_white.jpg";
import latest6 from "../media/tayson_white.jpg";
const LatestCollections = () => {
  return (
    <div className="latest_wrapper p20-80">
      <h2>New Arrivals</h2>
      <div className="latest_collections">
        <div>
          <div className="new_arrivals">
            <div className="latest">
              <img src={latest1} alt="" />
            </div>
            <span>Quick Look</span>
          </div>

          <div className="info">
            <span>HUBA Tshirt</span>
            <br />
            <span>Rs. 2500</span>
          </div>
        </div>

        <div>
          <div className="new_arrivals">
            <div className="latest">
              <img src={latest2} alt="" />
            </div>
            <span>Quick Look</span>
          </div>

          <div className="info">
            <span>Brocade Full Tshirt</span>
            <br />
            <span>Rs. 2500</span>
          </div>
        </div>

        <div>
          <div className="new_arrivals">
            <div className="latest">
              <img src={latest3} alt="" />
            </div>
            <span>Quick Look</span>
          </div>

          <div className="info">
            <span>Just Culture Tshirt</span>
            <br />
            <span>Rs. 2500</span>
          </div>
        </div>
        <div>
          <div className="new_arrivals">
            <div className="latest">
              <img src={latest4} alt="" />
            </div>
            <span>Quick Look</span>
          </div>

          <div className="info">
            {" "}
            <span>Tayson Dark Green Tshirt</span>
            <br />
            <span>Rs. 2500</span>
          </div>
        </div>
        <div>
          <div className="new_arrivals">
            <div className="latest">
              <img src={latest5} alt="" />
            </div>
            <span>Quick Look</span>
          </div>

          <div className="info">
            {" "}
            <span>White Tshirt</span>
            <br />
            <span>Rs. 2500</span>
          </div>
        </div>
        <div>
          <div className="new_arrivals">
            <div className="latest">
              <img src={latest6} alt="" />
            </div>
            <span>Quick Look</span>
          </div>

          <div className="info">
            <span>Tayson White Tshirt</span>
            <br />
            <span>Rs. 2500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCollections;
