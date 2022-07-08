import React from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

import SliderButton from "../Buttons/Slider/SliderButton.jsx";

import "./CardSlider.scss";

const CardSlider = () => {
  return (
    <div className="slider__cards-holder">
      <input
        type="radio"
        id="one"
        name="position"
        className="radio__but"
        checked
      />
      <input type="radio" id="two" name="position" className="radio__but" />
      <main id="carousel">
        <div className="item">
          <div className="caption__holder">
            <div>
              <h2>Productos</h2>
              <p className="carousel__par">
                <span className="span__cover">Lorem ipsum dolor sit amet </span>
                <span className="span__par">elit adipiscing </span>
              </p>
            </div>
            <input type="button" className="cards__butt" value="See more" />
          </div>
        </div>
        <div className="itema">
          <div className="caption__holder-two">
            <h2>Equipo de competicion</h2>
            <p className="carousel__par">
              <span className="span__cover">Lorem ipsum dolor sit amet </span>
              <span className="span__par">adipiscing elit</span>
            </p>
            <input type="button" className="cards__butt" value="See more" />
          </div>
        </div>
      </main>
      <div className="op-buttons">
        <label htmlFor="one" className="one active">
          <MdOutlineLocalGroceryStore className="bs__arr" />
        </label>
        <label htmlFor="two" className="two">
          <RiTeamFill className="bs__arr-r" />
        </label>
      </div>
    </div>
  );
};

export default CardSlider;
