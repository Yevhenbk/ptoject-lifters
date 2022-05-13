import React from "react";
import { GiStrongMan } from "react-icons/gi";
import { IoMdMan } from "react-icons/io";
import { GiWeightLiftingUp } from "react-icons/gi";

import "./Info.scss";

const Info = () => {
  return (
    <div className="info__holder">
      <div className="info">
        <div className="info__states">
          <div className="info__state">
            <IoMdMan className="state__icon" />
            <h3>Mejora de la capacidad de concentración</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              saepe non dolores ea eaque.
            </p>
          </div>
          <div className="info__state">
            <GiWeightLiftingUp className="state__icon" />
            <h3>Aprendizaje y perfeccionamiento técnico</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              saepe non dolores ea eaque.
            </p>
          </div>
          <div className="info__state">
            <GiStrongMan className="state__icon" />
            <h3>Mejora de potencia y fuerza muscular</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
              saepe non dolores ea eaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
