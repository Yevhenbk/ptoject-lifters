import React from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

import SliderButton from "../Buttons/Slider/SliderButton.jsx";

import "./CardSlider.scss";

const CardSlider = () => {
  return (
    <>
      <h4>
        Scroll to see the sticky element <em>sticking</em>
      </h4>
      <div class="extra"></div>
      <br />
      <div id="wrapper">
        <div id="sticky">sticky</div>
      </div>
      <br />
      <div class="extra"></div>
    </>
  );
};

export default CardSlider;
