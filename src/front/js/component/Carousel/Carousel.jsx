import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../img/im1.jpeg";
import slide2 from "../../img/im4.jpeg";
import slide3 from "../../img/im3.jpeg";

import "./Carousel.scss";

const Tcarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={5000}>
        <img className="carouselImage" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <p className="carousel__par">
            <span className="span__par">Nulla vitae elit libero </span>

            <span className="span__cover">
              a pharetra augue mollis interdum
            </span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="carouselImage" src={slide2} alt="Second slide" />

        <Carousel.Caption>
          <p className="carousel__par">
            <span className="span__par">Lorem ipsum dolor sit amet </span>

            <span className="span__cover">consectetur adipiscing elit</span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="carouselImage" src={slide3} alt="Third slide" />

        <Carousel.Caption>
          <p className="carousel__par">
            <span className="span__par">Praesent commodo cursus magna </span>

            <span className="span__cover">
              vel scelerisque nisl consectetur
            </span>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Tcarousel;
