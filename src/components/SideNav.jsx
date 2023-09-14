import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiVideoRecording } from "react-icons/bi";
import { PiTelevisionBold } from "react-icons/pi";
import { GrSchedulePlay, GrLogout } from "react-icons/gr";
import logo from "../images/tv.png";
import "../css/SideNav.css";

const SideNav = () => {
  return (
    <ul className="side-nav">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
        <span>MovieBox</span>
      </Link>
      <Link to="/">
        <AiOutlineHome />
        <span>Home</span>
      </Link>
      <Link to="/">
        <BiVideoRecording />
        <span>Movies</span>
      </Link>
      <Link to="/">
        <PiTelevisionBold />
        <span>TV Series</span>
      </Link>
      <Link to="/">
        <GrSchedulePlay />
        <span>Upcomig</span>
      </Link>
      <div className="watch-now-box">
        <p>Play movie quizes and earn free tickets</p>
        <small>50k people are playing now</small>
        <Link>Start playing</Link>
      </div>
      <span className="logout">
        <GrLogout />
        <span>Logout</span>
      </span>
    </ul>
  );
};

export default SideNav;
