import React from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import slide1 from "../../../img/im1.jpeg";
import slide2 from "../../../img/im4.jpeg";

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
        <div className="item"></div>
        <div className="item"></div>
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
