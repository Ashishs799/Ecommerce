import React from "react";
import "../styles/Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <h1>Sneakerzz</h1>
      <div className="flex footer_wrapper">
        <div className="footer_links">
          <ul className="flex_column links">
            <li>Men</li>
            <li>Women</li>
            <li>Sneakers</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer_links column">
          <ul className="flex_column links">
            <li>sneakerzz@gmail.com</li>
            <li>Koteshwar-32, Kathmandu</li>
            <li>Phone: +977 9805834618</li>
          </ul>
          <div>
            <AiFillInstagram />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
        <div className="footer_links">
          <span>Receive all our news and updates</span>
          <input type="text" placeholder="Enter your email here*" />
          <button className="button subscribe_btn">Subscribe now</button>
        </div>
      </div>
      <div className="copyright flex">
        <span>copyright &copy;2024 Sneakerzz | Powered by Sneakerzz</span>
      </div>
    </footer>
  );
};
