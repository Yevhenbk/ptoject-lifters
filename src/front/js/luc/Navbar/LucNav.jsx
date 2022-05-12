import React, { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { Navbarmenu } from "../../component/Navbarmenu/Navbarmenu.jsx";

import "./LucNav.scss";

const LucNav = () => {
  const [navbar, setNavbar] = useState(false);

  const showColor = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", showColor);

  return (
    <div
      className={
        navbar ? "luc__nav active__nav fixed-top" : "luc__nav fixed-top"
      }
    >
      <h3 className="header__three">Los Tercios</h3>
      <div className="luc__nav__icons">
        <MdEmail className="icon__small" />
        <AiFillInstagram className="icon__grand" />
        <div className="menu__grand">
          <Navbarmenu />
        </div>
      </div>
    </div>
  );
};

export default LucNav;
