import React from "react";
import { Link } from "react-router-dom";
import "../../styles/representatives.scss";

const Representatives = () => {
  return (
    <div className="resisted-group">
      <div className="marks-divs">
        <h2 className="marks-title">Por que Halterofilia?</h2>
        <p className="marks-p">
          Deporte con una historia milenaria. El levantamiento de pesas es
          historia viva del ser humano, sin importar la civilización o el pais
          de origen. El pesista es un atleta fuerte, rápido, con una condición
          física suprema y una gran capacidad de concentración.
        </p>
        {/* <p className="marks-footer">!Únete a nuestro club de halterofilia!</p> */}
        <Link to="/clases" className="menu-link">
          !Únete a nuestro club de halterofilia!
        </Link>
        <div className="inter-div" />
      </div>
    </div>
  );
};

export default Representatives;
