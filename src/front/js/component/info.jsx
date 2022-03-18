import React from "react";
import "../../styles/info.scss";

const Info = ({ id, title, text }) => {
  return (
    <div className="info-holder">
      <div className="about-card" id={id}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Info;
