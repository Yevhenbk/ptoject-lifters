import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({ img, name, rating, text }) => {
  return (
    <div className="op__card">
      <div className="op__cards__first">
        <div className="in__between">
          <img src={img} className="op__card__img" />
          <div className="op__card__first__holder">
            <p className="op__card__name">{name}</p>
            <div className="op__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <AiFillStar className="star__op" />
                ))}
            </div>
          </div>
        </div>
        <div className="google__img" />
      </div>
      <div className="op__text__holder">
        <p className="op__text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
