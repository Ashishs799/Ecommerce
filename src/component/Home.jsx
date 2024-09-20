import React from "react";
import "../styles/Home.css";
import Ana from "../media/maya.png";
import { Button } from "./Button";
import { SearchBar } from "./SearchBar";
export const Home = ({ hideSearchBar, hide }) => {
  return (
    <section className="home">
      <SearchBar hideSearchBar={hideSearchBar} hide={hide} />
      <div className="headings">
        <h3>Make your fashion better</h3>
        <h1>Clothing is for you..</h1>
        <Button />
      </div>
      <img src={Ana} alt="" className="hero_img" />
    </section>
  );
};
