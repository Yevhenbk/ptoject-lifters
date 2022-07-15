import React from "react";

const Card = ({ price, span, title, text }) => {
  return (
    <div className="open__card">
      <div>
        <p>{title}</p>
        <div className="holder__price">
          <h1>{price}</h1>
          <span>{span}</span>
          <h1>€</h1>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
