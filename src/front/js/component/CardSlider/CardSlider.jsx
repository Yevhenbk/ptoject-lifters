import React from "react";
import slide1 from "../../../img/im1.jpeg";
import slide2 from "../../../img/im4.jpeg";

import "./CardSlider.scss";

const CardSlider = () => {
  return (
    <div className="slider__cards-holder">
      <div className="slider__cards-ss">
        <input type="radio" name="dot" id="one" className="radio-but" />
        <input type="radio" name="dot" id="two" className="radio-but" />
        <div className="op-slider__cards">
          <div className="slider-cards">
            <img src={slide1} className="whatever" />
          </div>
          <div className="slider-cards">
            <img src={slide1} className="whatever" />
          </div>
        </div>
        <div className="slider-buttons">
          <div className="anim__dots">
            <label htmlFor="one" className="one active" />
          </div>

          <label htmlFor="two" className="two" />
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
