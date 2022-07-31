import React from "react";
import CardSlider from "../../component/CardSlider/CardSlider.jsx";
import { GiArrowhead } from "react-icons/gi";

import "./SemiCards.scss";

const SemiCards = () => {
  return (
    <div className="semi__infos">
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
        <CardSlider />
      </div> */}
      <div className="background__text">
        <div className="sticky__header"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quas
          dolorem recusandae omnis minus repudiandae in soluta aspernatur quis
          perferendis, quia blanditiis aliquam voluptas ratione esse tenetur
          porro at magnam?
        </p>
      </div>
    </div>
  );
};

export default SemiCards;
