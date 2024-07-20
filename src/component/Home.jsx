import React from "react";
import "../styles/Home.css";
import Ana from "../media/ana.png";
import { Button } from "./Button";
export const Home = () => {
  return (
    <section>
      <div className="headings">
        <h3>Make your fashion better</h3>
        <h1>Clothing is for you</h1>
        <Button/>
      </div>
      <img src={Ana} alt="" />
    </section>
  );
};
