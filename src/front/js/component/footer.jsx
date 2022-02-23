import React from "react";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-section-two">
        <div className="sct-first">
          <p>Copyright © 2021</p>
          <span className="vertical" />
          <p>Powered by The House of Lifters ®</p>
        </div>

        <div className="sct-second">
          <p>Politica de privacidad</p>
          <span className="vertical" />
          <p>Contactar con nosotros</p>
          <span className="vertical" />
          <a
            href="https://www.instagram.com/the_house_of_lifters/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
