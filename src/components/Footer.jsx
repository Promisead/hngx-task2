import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a href="/">
          <AiFillFacebook />
        </a>
        <a href="/">
          <AiOutlineInstagram />
        </a>
        <a href="/">
          <AiOutlineTwitter />
        </a>
        <a href="/">
          <AiFillYoutube />
        </a>
      </div>
      <ul>
        <li>Conditions Of Use</li>
        <li>Privacy & Policy</li>
        <li>Press Room</li>
      </ul>
      <p>© 2023 MovieBox by Promise Champion </p>
    </footer>
  );
};

export default Footer;
