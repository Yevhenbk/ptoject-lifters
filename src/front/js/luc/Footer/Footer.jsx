import React from "react";
import logo from "../../../img/red__logo.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__class">
          <img src={logo} className="footer__logo" />
        </div>
      </div>
      <div className="super__class">
        <div className="class__holder">
          <p>Politica de privacidad</p>
          <div className="footer__brake" />
          <p>Condiciones de uso</p>
          <div className="footer__brake" />
          <p>Contacta con nosotros</p>
        </div>
        <p>
          Powered by <span>Los Tercios ®</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
