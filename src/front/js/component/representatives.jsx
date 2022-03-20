import React from "react";
import noimage from "../../img/noimage.jpg";
import "../../styles/representatives.scss";

const Representatives = () => {
  return (
    <div className="resisted-group">
      <div className="res-img-holder">
        <img src={noimage} className="res-group-img" />
      </div>

      <div className="marks-divs">
        <h2 className="marks-title">Por que Halterofilia?</h2>
        <p className="marks-p">
          Deporte con una historia milenaria. El levantamiento de pesas es
          historia viva del ser humano, sin importar la civilización o el pais
          de origen. El pesista es un atleta fuerte, rápido, con una condición
          física suprema y una gran capacidad de concentración.
        </p>
        <div className="button-dark-holder">
          <input
            type="button"
            className="button-dark"
            value="!Únete a nuestro club de halterofilia!"
            id="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Representatives;
