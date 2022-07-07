import React from "react";
import CardSlider from "../../component/CardSlider/CardSlider.jsx";
import { MdProductionQuantityLimits } from "react-icons/md";

import products from "../../../img/wats1.jpeg";

import "./SemiCards.scss";

const SemiCards = () => {
  return (
    <div className="semi-cards__holder">
      <div className="semi-cards">
        <span className="semi__divider" />
        <h3 className="span__text">Discover more</h3>
      </div>
      <div className="semi__infos">
        <div className="infos__fi">
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
          <input type="button" className="blog__butt" value="More here" />
        </div>
        <div className="infos__se">
          <CardSlider />
        </div>
      </div>
    </div>
  );
};

export default SemiCards;
