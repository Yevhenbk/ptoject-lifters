import React from "react";
import CardSlider from "../../component/CardSlider/CardSlider.jsx";
import { GiArrowhead } from "react-icons/gi";

import "./SemiCards.scss";

const SemiCards = () => {
  return (
    <div className="semi__infos">
      <div className="infos__fi">
        <div className="fi_">
          <h1 className="infos__header">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <h3 className="infos__h">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At officia
            est hic laborum maxime quae numquam doloremque modi?
          </h3>
          <p className="infos__par">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos
            pariatur natus, rerum, tempore debitis, distinctio reiciendis
            placeat asperiores iste autem fugiat velit numquam porro consequatur
            aliquid tempora soluta voluptatem!
          </p>
          <button className="blog__butt">
            Empezar leyendo <GiArrowhead className="right__arrow" />
          </button>
        </div>
      </div>
      <div className="infos__se">
        <CardSlider />
      </div>
    </div>
  );
};

export default SemiCards;
