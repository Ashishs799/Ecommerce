import React from "react";
import { Home } from "./component/Home";
import LatestCollections from "./component/LatestCollections";
import Shoes_section from "./Shoes_section";
import Men_shop from "./component/Men_shop";

export const Container = () => {
  return (
    <>
      <Home />
      <LatestCollections />
      <Shoes_section />
      <Men_shop/>
    </>
  );
};
