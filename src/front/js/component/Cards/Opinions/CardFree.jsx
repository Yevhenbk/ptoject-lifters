import React from "react";

const CardFree = ({ img, name, rating, text }) => {
  return (
    <div className="free-card">
      <div className="free-cards-first">
        <div className="in-between">
          <img src={img} className="free-card-img" />
          <div className="free-card-first-holder">
            <p className="free-card-name">{name}</p>
            <div className="free-rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <img
                    key={i}
                    src="https://img.icons8.com/fluency/21/000000/filled-star.png"
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="google-img" />
      </div>
      <div className="free-text-holder">
        <p className="free-text">{text}</p>
      </div>
    </div>
  );
};

export default CardFree;
