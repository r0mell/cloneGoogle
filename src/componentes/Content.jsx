import React from "react";
import Google from "../assets/img/Google.png";
import "../assets/styles/main.css";
import Busqueda from "../assets/img/Busqueda.svg";
import Lupa from "../assets/img/Lupa.png";

const Content = () => {
  return (
    <main>
      <div className="main-container">
        <div className="main-img">
          <img src={Google} alt="google"></img>
        </div>

        <div className="main-input">
          <img className="input-busqueda" src={Lupa} alt="" />
          <input
            type="text"
            placeholder="Buscar en Google o escribir una URL"
            className="main-input-search"

          />
          <img className="input-voz" src={Busqueda} alt="" />
        </div>

        <div className="main-componet">
          {/* este puede ser un componente que tenga un icono con un nombre */}
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default Content;
