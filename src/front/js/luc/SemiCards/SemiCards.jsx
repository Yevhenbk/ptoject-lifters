import React from "react";
import SemiCard from "../../component/Cards/Semi/SemiCard.jsx";
import noimage from "../../../img/noimage.jpg";

import "./SemiCards.scss";

const SemiCards = () => {
  return (
    <div className="semi-cards__holder">
      <div className="semi-cards">
        <SemiCard
          img={noimage}
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio omnis odio, ipsam, dicta maiores dolore aliquid mollitia magnam sint incidunt id consectetur voluptatibus tenetur officiis cum aut nesciunt ex nisi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio omnis odio, ipsam, dicta maiores dolore aliquid mollitia magnam sint incidunt id consectetur voluptatibus tenetur officiis cum aut nesciunt ex nisi."
          name="Lorem Ipsum"
        />
        <SemiCard
          img={noimage}
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio omnis odio, ipsam, dicta maiores dolore aliquid mollitia magnam sint incidunt id consectetur voluptatibus tenetur officiis cum aut nesciunt ex nisi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio omnis odio, ipsam, dicta maiores dolore aliquid mollitia magnam sint incidunt id consectetur voluptatibus tenetur officiis cum aut nesciunt ex nisi."
          name="Lorem Ipsum"
        />
        <SemiCard
          img={noimage}
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio omnis odio, ipsam, dicta maiores dolore aliquid mollitia magnam sint incidunt id consectetur voluptatibus tenetur officiis cum aut nesciunt ex nisi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio omnis odio, ipsam, dicta maiores dolore aliquid mollitia magnam sint incidunt id consectetur voluptatibus tenetur officiis cum aut nesciunt ex nisi."
          name="Lorem Ipsum"
        />
      </div>
    </div>
  );
};

export default SemiCards;
