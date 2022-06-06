import React from "react";

import "./SemiCard.scss";

const SemiCard = ({ img, name, text }) => {
  return (
    <div className="semi__card">
      <div className="semi__holder">
        <p>{text}</p>
        <div className="semi_sec">
          <img src={img} className="semi-img" />
          <h4 className="semi__card__name">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default SemiCard;
