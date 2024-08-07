import React, { useState } from "react";
import { IoShirt } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCircleRemove } from "react-icons/ci";
import "../styles/Navbar.css";
import Logo from "../media/logo.png";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };
  return (
    <div className="navbar">
      <div className={active ? "dropdown active_menu" : "dropdown"}>
        <CiCircleRemove onClick={toggleMenu} />
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <nav className="flex">
        <div className="hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
        <div className="logo">
          <img src={Logo} alt="" className="logo_" />
        </div>

        <ul className="category_nav flex">
          <li className="navlinks">Men</li>
          <li className="navlinks">Women</li>
          <li className="navlinks">Sneakers</li>
        </ul>
        <div className="loginbtn flex">
          <CiSearch />
          <BsHandbagFill />
          <span className="login">LOG IN</span>
        </div>
      </nav>
    </div>
  );
};
