import React from "react";
import logo from "../images/tv.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo" style={{ background: "transparent" }}>
        <img src={logo} alt="" />
        <span>MovieBox</span>
      </Link>
      <div className="search">
        <input type="text" placeholder="what do you want to watch?" />
        <BsSearch />
      </div>
      <div className="auth">
        <span>Sign In</span>
        <div className="icon">
          <AiOutlineMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
