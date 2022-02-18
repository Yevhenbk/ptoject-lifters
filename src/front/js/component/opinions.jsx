import React from "react";
// import Rating from "@mui/material/Rating";
import nouser from "../../img/noimage.jpg";
import "../../styles/opinions.scss";

const Opinions = () => {
  return (
    <div className="opinions-holder">
      <div className="opinions">
        {/* <h2 className="op-header">¿Qué dicen de nosotros?</h2> */}
        <p className="op-header-text">¿Qué dicen de nosotros?</p>
        <input type="radio" name="dot" id="one" className="radio-but" />
        <input type="radio" name="dot" id="two" className="radio-but" />
        <div className="op-cards-holder">
          <div className="op-cards">
            <div className="op-card">
              <div className="op-cards-first">
                <div className="in-between">
                  <img src={nouser} className="op-card-img" />
                  <div className="op-card-first-holder">
                    <p className="op-card-name">Brígido Lozano</p>
                    <p className="op-card-date">2020-07-18</p>
                  </div>
                </div>
                <div className="google-img" />
              </div>
              <div className="op-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                {/* <Rating name="read-only" value={value} readOnly /> */}
              </div>
              <div className="op-text-holder">
                <p className="op-text">
                  Ideal para entrenar fuerza. Muy recomendable para deportistas
                  serios.
                </p>
              </div>
            </div>
            <div className="op-card">
              <div className="op-cards-first">
                <div className="in-between">
                  <img src={nouser} className="op-card-img" />
                  <div className="op-card-first-holder">
                    <p className="op-card-name">Brígido Lozano</p>
                    <p className="op-card-date">2020-07-18</p>
                  </div>
                </div>
                <div className="google-img" />
              </div>
              <div className="op-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="op-text-holder">
                <p className="op-text">
                  Ideal para entrenar fuerza. Muy recomendable para deportistas
                  serios.
                </p>
              </div>
            </div>
            <div className="op-card">
              <div className="op-cards-first">
                <div className="in-between">
                  <img src={nouser} className="op-card-img" />
                  <div className="op-card-first-holder">
                    <p className="op-card-name">Brígido Lozano</p>
                    <p className="op-card-date">2020-07-18</p>
                  </div>
                </div>
                <div className="google-img" />
              </div>
              <div className="op-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="op-text-holder">
                <p className="op-text">
                  Ideal para entrenar fuerza. Muy recomendable para deportistas
                  serios.
                </p>
              </div>
            </div>
          </div>
          <div className="op-cards">
            <div className="op-card">
              <div className="op-cards-first">
                <div className="in-between">
                  <img src={nouser} className="op-card-img" />
                  <div className="op-card-first-holder">
                    <p className="op-card-name">Brígido Lozano</p>
                    <p className="op-card-date">2020-07-18</p>
                  </div>
                </div>
                <div className="google-img" />
              </div>
              <div className="op-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="op-text-holder">
                <p className="op-text">
                  Ideal para entrenar fuerza. Muy recomendable para deportistas
                  serios.
                </p>
              </div>
            </div>
            <div className="op-card">
              <div className="op-cards-first">
                <div className="in-between">
                  <img src={nouser} className="op-card-img" />
                  <div className="op-card-first-holder">
                    <p className="op-card-name">Brígido Lozano</p>
                    <p className="op-card-date">2020-07-18</p>
                  </div>
                </div>
                <div className="google-img" />
              </div>
              <div className="op-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="op-text-holder">
                <p className="op-text">
                  Ideal para entrenar fuerza. Muy recomendable para deportistas
                  serios.
                </p>
              </div>
            </div>
            <div className="op-card">
              <div className="op-cards-first">
                <div className="in-between">
                  <img src={nouser} className="op-card-img" />
                  <div className="op-card-first-holder">
                    <p className="op-card-name">Frag Lozano</p>
                    <p className="op-card-date">2020-07-18</p>
                  </div>
                </div>
                <div className="google-img" />
              </div>
              <div className="op-rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="op-text-holder">
                <p className="op-text">
                  Ideal para entrenar fuerza. Muy recomendable para deportistas
                  serios. Ideal para entrenar fuerza. Muy recomendable para
                  deportistas serios. Ideal para entrenar fuerza. Muy
                  recomendable para deportistas serios.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="op-buttons">
          <label htmlFor="one" className="one active" />
          <label htmlFor="two" className="two" />
        </div>
      </div>
    </div>
  );
};

export default Opinions;
