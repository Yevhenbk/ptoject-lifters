import React from "react";

import "./SectionsCard.scss";

const SectionsCard = ({ title, text }) => {
  return (
    <div className="sections__card__holder">
      <div className="sections__card">
        <h3>{title}</h3>
        <p>{text}</p>
        <input
          type="button"
          className="sections__input"
          value="Discover more"
        />
      </div>
    </div>
  );
};

export default SectionsCard;
