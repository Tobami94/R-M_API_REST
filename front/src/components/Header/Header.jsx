import React from "react";
import StyleH from "./Header.module.css";
import imageH from "./imagenH.png";

const Header = () => {
  return (
    <header>
      <div className={StyleH.contenedor}>
        <img class="text-center bg-image" src={imageH} />
      </div>
    </header>
  );
};

export default Header;
