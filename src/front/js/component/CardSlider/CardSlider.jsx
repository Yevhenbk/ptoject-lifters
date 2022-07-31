import React from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

import SliderButton from "../Buttons/Slider/SliderButton.jsx";

import "./CardSlider.scss";

const CardSlider = () => {
  return (
    <div className="card__slider">
      <video
        muted
        playsInline
        autoPlay
        loop
        src="https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4"
        className="slider__video"
      />
      <div id="rssBlock">
        <p className="cnnContents">
          <span className="marqueeStyle">
            &nbsp;continuous infinite text loop 1 continuous infinite text loop
            2{" "}
          </span>
          <span className="marqueeStyle2">
            &nbsp;continuous infinite text loop 3 continuous infinite text loop
            4&nbsp;
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardSlider;
