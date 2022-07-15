import React from "react";

import "./OpenCard.scss";

const Card = ({ price, span, title, text, desc }) => {
  return (
    <div className="open__card">
      <div className="opne__first">
        <p className="open__b">{title}</p>
        <div className="holder__price">
          <h1>{price}</h1>
          <span>{span}</span>
          <h1>
            € / <span>mes</span>
          </h1>
        </div>
        <div className="opne__second">
          <p className="open__lit">{text}</p>
          <p className="open__desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
