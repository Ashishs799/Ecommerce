import React, { useState } from "react";
import { toast } from "react-toastify";
export const Quantity = ({ quantity, setQuantity }) => {
  const incrementQuatity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuatity = () => {
    if (quantity === 1) {
      toast.error("Choose at at least one.");
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="quantity flex">
      <span onClick={decrementQuatity}>-</span>
      <input type="text" value={quantity} readOnly className="quantity_no" />
      <span onClick={incrementQuatity}>+</span>
    </div>
  );
};
