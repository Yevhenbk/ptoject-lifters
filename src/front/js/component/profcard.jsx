import React from "react";
import Members from "../component/members.jsx";
import "../../styles/profcard.scss";

const Profcard = () => {
  return (
    <div className="profcard-holder">
      <div className="prof-title-holder">
        <h4 className="h4-pr">Mi Perfil</h4>
        <div className="hr-line" />
      </div>
      <div className="items-holder">
        <Members />
      </div>
    </div>
  );
};

export default Profcard;
