import React, { useEffect } from "react";
import "../styles/EmptyCart.css";
import Emptycart from "../media/emptycart.png";
import { Link, useNavigate } from "react-router-dom";
const EmptyCart = () => {
  const navigate = useNavigate();

  const shoppingHandler = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 600, behavior: "smooth" });
    }, 200);
  };
  return (
    <div className=" empty_cart">
      <div className="empty_wrapper flex_column">
        <img src={Emptycart} alt="" />
        <span>Your cart is empty</span>
        <button type="button" className="button" onClick={shoppingHandler}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
