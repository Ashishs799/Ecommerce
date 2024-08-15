import React from "react";
import { Home } from "./component/Home";
import LatestCollections from "./component/LatestCollections";
import Shoes_section from "./component/Shoes_section";
import Men_shop from "./component/Men_shop";
import { Category } from "./component/Category";
import { Footer } from "./component/Footer";

export const Container = () => {
  return (
    <>
      <Home />
      <LatestCollections />
      <Shoes_section />
      <Men_shop />
      <Category />
      
    </>
  );
};
