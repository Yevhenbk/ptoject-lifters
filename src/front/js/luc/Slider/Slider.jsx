import React from "react";
import Carousel from "../../component/carousel.jsx";

import "./Slider.scss";

const Slider = () => {
  return (
    <div className="luc__slider">
      <div className="slider__section_one">
        <h1 className="header__one">
          Lorem ipsum dolor sit amet consectetur adip.
        </h1>
        <p className="slider__paragraph">
          Deporte con una historia milenaria. El levantamiento de pesas es
          historia viva del ser humano, sin importar la civilización o el pais
          de origen. El pesista es un atleta fuerte, rápido, con una condición
          física suprema y una gran capacidad de concentración.
        </p>
        <input
          type="button"
          className="slider__button"
          value="Solicitar clase gratis"
        />
      </div>
      <div className="slider__section_two">
        <Carousel />
      </div>
    </div>
  );
};

export default Slider;
