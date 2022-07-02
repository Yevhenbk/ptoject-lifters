import React from "react";
import { AiFillStar } from "react-icons/ai";

const CardFree = ({ img, name, rating, text }) => {
  return (
    <div className="free__card">
      <div className="free__text__holder">
        <p className="free__text">{text}</p>
      </div>
      <div className="free__cards__first">
        <div className="in__between">
          <img src={img} className="free__card__img" />
          <div className="free__card__first__holder">
            <p className="free__card__name">{name}</p>
            <div className="op__rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <AiFillStar className="star__op" />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFree;
