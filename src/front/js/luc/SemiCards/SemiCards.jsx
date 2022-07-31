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
    <div>
      <div className="background__text">
        <h1 className="sticky__header">Sticky Header</h1>
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
  );
};

export default SemiCards;
