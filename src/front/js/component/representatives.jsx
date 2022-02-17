import React from "react";
import img from "../../img/noimage.jpg";
import "../../styles/representatives.scss";

const Representatives = () => {
  return (
    <div className="resisted-group">
      <div className="card-group-representatives">
        <div className="img-rep-holder">
          <img className="img-rep" src={img} />
        </div>

        <div className="marks-divs">
          <h4 className="marks-title">Por que Halterofilia?</h4>
          <div className="hr-line" />
          <p className="marks-p">
            Deporte con una historia milenaria. El levantamiento de pesas es
            historia viva del ser humano, sin importar la civilización o el pais
            de origen. El pesista es un atleta fuerte, rápido, con una condición
            física suprema y una gran capacidad de concentración.
          </p>
          <p className="marks-footer">!Únete a nuestro club de halterofilia!</p>
          <input type="button" value="Reserve" className="welcome-button" />
        </div>
      </div>
    </div>
  );
};

export default Representatives;
