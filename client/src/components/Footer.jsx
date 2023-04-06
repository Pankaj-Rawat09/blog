import React from "react";
import Logo from "../img/logo.jpg";

const Footer = () => {
  return (
    <footer>
      <img className="logo" src={Logo} alt="" />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
