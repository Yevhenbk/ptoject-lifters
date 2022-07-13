import React from "react";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section-two">
        <div className="sct-first">
          <p>Copyright © 2021</p>
          <span className="vertical" />
          <p>Powered by Los Tercios ®</p>
        </div>

        <div className="sct-second">
          <p>Politica de privacidad</p>
          <span className="vertical" />
          <p>Contactar con nosotros</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
