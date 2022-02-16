import React from "react";

import weights from "../../img/noimage.jpg";

import "../../styles/cards.scss";

const Cards = () => {
  return (
    <form>
      <div className="card-group-cards">
        <figure className="figure-card" id="img-block">
          <img src={weights} alt="" className="background-cards" />
          <figcaption className="caption-card">
            <div className="comp-card-1">
              <div className="figure-second-cards">
                <p className="fig-sec-p">Equipo de competicion</p>
              </div>
              <div className="class-info-holder">
                <p className="cards-info">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
              </div>
              <a href="#" className="cards-refs">
                Mas info
              </a>
            </div>
          </figcaption>
        </figure>
        <figure className="figure-card" id="img-block">
          <img src={weights} alt="" className="background-cards" />
          <figcaption className="caption-card">
            <div className="comp-card-2">
              <div className="figure-second-cards">
                <p className="fig-sec-p">Clases de halterofilia</p>
              </div>
              <div className="class-info-holder">
                <p className="cards-info">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
              </div>
              <a href="#" className="cards-refs">
                Mas info
              </a>
            </div>
          </figcaption>
        </figure>
        <figure className="figure-card" id="img-block">
          <img src={weights} alt="" className="background-cards" />
          <figcaption className="caption-card">
            <div className="comp-card-3">
              <div className="figure-second-cards">
                <p className="fig-sec-p">Nuestro blog</p>
              </div>
              <div className="class-info-holder">
                <p className="cards-info">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
              </div>
              <a href="#" className="cards-refs">
                Mas info
              </a>
            </div>
          </figcaption>
        </figure>
      </div>
    </form>
  );
};

export default Cards;
