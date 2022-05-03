import React from "react";
import { MdEmail } from "react-icons/md";
import { ImHome2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

import "./LucNav.scss";

const LucNav = () => {
  return (
    <div className="luc__nav fixed-top">
      <h3 className="header__three">Los Tercios</h3>
      <div className="luc__nav__icons">
        <MdEmail className="icon__small" />
        <AiFillInstagram className="icon__grand" />
        <ImHome2 className="icon__grand" />
      </div>
    </div>
  );
};

export default LucNav;
