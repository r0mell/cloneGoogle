import React from "react";
import "../assets/styles/main.css";
import Google from "../assets/img/Pencil.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-personalizar">
          <img src={Google} alt="" />
          Personalizar Chrome
        </div>
      </div>
    </>
  );
};

export default Footer;
