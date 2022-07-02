import React from "react";
import { MdProductionQuantityLimits } from "react-icons/md";

import products from "../../../img/wats1.jpeg";

import "./SemiCards.scss";

const SemiCards = () => {
  return (
    <div className="semi-cards__holder">
      <div className="semi-cards">
        <a href="" class="semi__card">
          <img src={products} class="card__image" alt="" />
          <div class="card__overlay">
            <div class="semi__card__header">
              <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
              </svg>
              <MdProductionQuantityLimits class="card__thumb" />
              <div class="card__header-text">
                <h3 class="card__title">Productos</h3>
              </div>
            </div>
            <p class="card__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, blanditiis?
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SemiCards;
