import React from "react";
import logo from "../../img/noimage.jpg";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-holder">
        <div className="card-group">
          <div className="footer-section-one">
            <div className="img-holder-footer">
              <img src={logo} alt="Logo" className="footer-Logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="middle-section">
        <div className="middle-section-first">
          <p className="middle-location">Our location</p>
          <a href="#" className="middle-tag">
            Calle de Miguel Yuste, 43 <br />
            28037 - Madrid, Espana
          </a>
        </div>

        <img
          src="https://crossfitmarbella.com/wp-content/uploads/NutritionBadge-300x57.png"
          className="middle-image"
        />

        <div className="middle-section-second">
          <p className="middle-location">Contact Information</p>

          <p className="middle-info">
            thehouseoflifters@gmail.com
            <br /> 722 75 39 92
          </p>
        </div>
      </div>

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
