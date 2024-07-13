import React from "react";
import { IoShirt } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="flex">
        <IoShirt />

        <ul className="category flex">
          <li>Men</li>
          <li>Women</li>
          <li>Sneakers</li>
        </ul>
        <div className="loginbtn flex">
          <CiSearch />
          <BsHandbagFill />
          <span>LOG IN</span>
        </div>
      </nav>
    </div>
  );
};
