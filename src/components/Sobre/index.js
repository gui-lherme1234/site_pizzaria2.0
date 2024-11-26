import React from "react";
import "./style.css";


const SecaoSobre = () => {
  return (
    <section id="sobre">
      <div className="about">

        <div className="about-pic">
          <img src="./assets/guilherme.jpg" alt="Imagem 1" />
          <div className="about-text">Guilherme Donizetti</div>
        </div>

        <div className="about-pic">
          <img src="./assets/arthur.jpg" alt="Imagem 2" />
          <div className="about-text">Arthur Guerra</div>
        </div>

        <div className="about-pic">
          <img src="./assets/thiago.jpg" alt="Imagem 3" />
          <div className="about-text">Thiago Henrique</div>
        </div>
      </div>

      
    </section>
  );
};

export default SecaoSobre;
