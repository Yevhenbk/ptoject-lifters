import React from "react";

const Opener = ({ img, title, text }) => {
  return (
    <div className="welcome-class">
      <div className="welcome-logo">
        <img src={img} className="wel-logo" />
      </div>
      <div className="wel-holder">
        <h4 className="welcome-title">{title}</h4>
        <div className="hr-line" />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Opener;
