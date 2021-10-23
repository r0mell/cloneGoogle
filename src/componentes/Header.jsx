import React from "react";
import "../assets/styles/main.css";
import puntos from "../assets/img/puntos.png";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div>Gmail</div>
        <div>Imágenes</div>

        <img src={puntos} />
      </nav>
    </header>
  );
};

export default Header;
