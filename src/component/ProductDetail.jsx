import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import collections from "../Data/collections";
import "../styles/ProductDetail.css";
import { Quantity } from "./Quantity";
import { Link } from "react-router-dom";

const ProductDetail = ({ addToCart, cartItems, quantity, setQuantity }) => {
  const [select, setSelected] = useState(null);

  const { productId } = useParams();
  const prodId = Number(productId);
  const product = collections.find((prod) => prod.id === prodId);

  const selectSize = (size) => {
    setSelected(size);
  };

  useEffect(() => {
    console.log("quantity selected ", quantity);
    console.log(cartItems);
  }, [cartItems]);

  return (
    <section className="product_detail">
      <div className="product_wrapper flex">
        <div className="prod_img">
          <img src={product.image} alt="" />
        </div>
        <div className="prod_desc flex_column">
          <div className="intro flex_column">
            <span className="logo_name">Sneakerzz</span>
            <span className="m-0 prod_name">{product.name}</span>
            <span className="price">Rs. {product.price}</span>
          </div>
          <span className="size_lbl">Size</span>
          <div className="flex size">
            <div
              className={select === "S" ? "size_wrap selected" : "size_wrap"}
              onClick={() => selectSize("S")}
            >
              <span>S</span>
            </div>

            <div
              className={select === "M" ? "size_wrap selected" : "size_wrap"}
              onClick={() => selectSize("M")}
            >
              <span>M</span>
            </div>

            <div
              className={select === "L" ? "size_wrap selected" : "size_wrap"}
              onClick={() => selectSize("L")}
            >
              <span>L</span>
            </div>
            <div
              className={select === "XL" ? "size_wrap selected" : "size_wrap"}
              onClick={() => selectSize("XL")}
            >
              <span>XL</span>
            </div>
            <div
              className={select === "XXL" ? "size_wrap selected" : "size_wrap"}
              onClick={() => selectSize("XXL")}
            >
              <span>XLL</span>
            </div>
          </div>
          <span className="size_lbl">Quantity</span>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
          <button
            type="button"
            className="button cart_btn"
            onClick={() => addToCart(product.id, select, quantity)}
          >
            Add to cart
          </button>

          <div className="description">
            <span className="size_lbl">Description</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              molestiae itaque earum voluptatibus debitis? Rerum autem similique
              molestias architecto vitae laboriosam quibusdam dignissimos ipsam
              atque odit, enim placeat recusandae? Vel, doloremque debitis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
