import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { productId } = useParams();
  const prodId = Number(productId);
  console.log(prodId);
  return <div></div>;
};

export default ProductDetail;
