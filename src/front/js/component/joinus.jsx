import React from "react";
import "../../styles/joinus.scss";
import "../../styles/welcome.scss";

const Joinus = () => {
  return (
    <div className="joinus-holder">
      <div className="wel-holder">
        <h2 className="welcome-title">Join 'ClubName' right now!</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="wel-buttons-holder">
          <input type="button" value="Inscribirme" className="button-dark" />
        </div>
      </div>
    </div>
  );
};

export default Joinus;
