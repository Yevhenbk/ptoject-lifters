import React from "react";
import Members from "../Members/Members.jsx";
import "./ProfileCard.scss";
import Addclass from "../component/addclass.jsx";
import Registeradmin from "../registeradmin.jsx";

const Profcard = () => {
  return (
    <div className="profcard-holder">
      <div className="prof-title-holder">
        <h4 className="h4-pr">Mi Perfil</h4>
        <div className="hr-line" />
      </div>
      <div className="items-holder">
        <Members />
        <div className="items-sec">
          <Addclass />
          <Registeradmin />
        </div>
      </div>
    </div>
  );
};

export default Profcard;
