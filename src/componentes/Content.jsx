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
          <img src={Google}></img>
        </div>

        <div className="main-input">
          <img className="input-busqueda" src={Lupa} alt="" />
          <input
            type="seach"
            placeholder="Haz una búsqueda en Google o escribe una URL"
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
