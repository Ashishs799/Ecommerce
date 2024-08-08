import React, { useState } from "react";
import { IoShirt } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import { CiCircleRemove } from "react-icons/ci";
import "../styles/Navbar.css";
import Logo from "../media/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };
  return (
    <div className="navbar">
      <div className={active ? "dropdown active_menu" : "dropdown"}>
        <RxCross1
          onClick={toggleMenu}
          style={{
            position: "absolute",
            right: "8px",
            top: "5px",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        />
        <ul className="menubar flex_column">
          <li>Men</li>
          <li>Women</li>
          <li>Sneaker</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="menu_login">
          <CiUser style={{ fontSize: "1.2rem" }} />
          <span>Log in</span>
        </div>
      </div>
      <nav className="flex">
        <div className="hamburger" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="" className="logo_" />
          </Link>
        </div>

        <ul className="category_nav flex">
          <li className="navlinks">Men</li>
          <li className="navlinks">Women</li>
          <li className="navlinks">Sneaker</li>
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
