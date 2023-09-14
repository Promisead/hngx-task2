import React from "react";
import "../css/Header.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import img1 from "../images/imbd.png";
import img2 from "../images/fruit.png";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="text-box">
        <h1>
          John Wick 3: <br />
          Parabellum
        </h1>
        <div className="ratings">
          <span>
            <img src={img1} alt="" />
            <small>86.0/100</small>
          </span>
          <span>
            <img src={img2} alt="" />
            <small>97%</small>
          </span>
        </div>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <Link to="" style={{ width: "200px" }}>
          <AiFillPlayCircle />
          <span>WATCH TRAILER</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
