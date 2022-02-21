import React from "react";
import "../../styles/opinions.scss";

const Card = ({ img, name, rating, text }) => {
  return (
    <div className="op-card">
      <div className="op-cards-first">
        <div className="in-between">
          <img src={img} className="op-card-img" />
          <div className="op-card-first-holder">
            <p className="op-card-name">{name}</p>
            <div className="op-rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <img src="https://img.icons8.com/fluency/21/000000/filled-star.png" />
                ))}
            </div>
          </div>
        </div>
        <div className="google-img" />
      </div>
      <div className="op-text-holder">
        <p className="op-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
