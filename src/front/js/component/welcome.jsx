import React from "react";
import "../../styles/welcome.scss";
import noimg from "../../img/noimage.jpg";

const Welcome = () => {
  return (
    <div className="welcome-class">
      <div className="welcome-logo">
        <img src={noimg} className="wel-logo" />
      </div>
      <div className="wel-holder">
        <h4 className="welcome-title">Welcome to 'ClubName'</h4>
        <div className="hr-line" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          ducimus optio fugiat odio beatae, rerum doloremque, id corrupti iusto
          accusamus soluta! Ea, earum eaque illum ullam accusantium atque
          possimus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Assumenda ducimus optio fugiat odio beatae, rerum doloremque, id
          corrupti iusto accusamus soluta!
        </p>
        <div className="wel-buttons-holder">
          <input type="button" value="Inscribirme" className="welcome-button" />
          <input type="button" value="Learn More" className="welcome-button" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
