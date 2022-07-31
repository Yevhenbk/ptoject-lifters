import React from "react";
import CardSlider from "../../component/CardSlider/CardSlider.jsx";
import { GiArrowhead } from "react-icons/gi";

import "./SemiCards.scss";

const SemiCards = () => {
  return (
    <div>
      {/* <div className="infos__fi">
        <div className="fi_">
          <h1 className="infos__header">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="infos__par">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos
            pariatur natus, rerum, tempore debitis, distinctio reiciendis
            placeat asperiores iste autem fugiat velit numquam porro
            consequatur.
          </p>
          <a className="blog__butt">
            Start reading <GiArrowhead className="right__arrow" />
          </a>
        </div>
      </div>
      <div className="infos__se">
        
      </div> */}
      <div className="background__text">
        <h1 className="sticky__header">Sticky Header</h1>
        <div className="card__slider-holder">
          <CardSlider />
          <CardSlider />
          <CardSlider />
          <CardSlider />
        </div>
      </div>
    </div>
  );
};

export default SemiCards;
