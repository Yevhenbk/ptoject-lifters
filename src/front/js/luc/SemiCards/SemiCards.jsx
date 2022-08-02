import React, { useEffect, useState } from "react";
import CardSlider from "../../component/CardSlider/CardSlider.jsx";
import { GiArrowhead } from "react-icons/gi";

import "./SemiCards.scss";

const SemiCards = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="semi">
        <div className="hor__brake-holder">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
            libero, possimus obcaecati.
          </p>
          <div className="hr" />
        </div>
        <div className="background__text">
          {/* <h1
          className="sticky__header"
          style={{
            transform: `translateY(${offsetY * 0.94}px)`,
            position: `relative`,
            top: `-1100px`,
          }}
        >
          Lorem, ipsum dolor
          <br />
          sit amet consectetur
        </h1> */}
          <div className="card__slider-holder">
            <CardSlider
              style={{
                transform: `translateY(-${offsetY * 0.14}px)`,
                position: `relative`,
                top: `200px`,
              }}
            />
            <CardSlider
              style={{
                transform: `translateY(-${offsetY * 0.24}px)`,
                position: `relative`,
                top: `200px`,
                right: `100px`,
              }}
            />
            <CardSlider
              style={{
                transform: `translateY(-${offsetY * 0.44}px)`,
                position: `relative`,
                top: `1000px`,
                left: `100px`,
              }}
            />
            <CardSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default SemiCards;
