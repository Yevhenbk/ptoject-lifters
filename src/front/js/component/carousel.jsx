import React from "react";
import { Carousel } from "react-bootstrap";
import weights from "../../img/wide.jpg";

import "../../styles/carousel.scss";

const Tcarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img className="carouselImage" src={weights} alt="First slide" />
        <Carousel.Caption>
          <h4>First slide label</h4>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img className="carouselImage" src={weights} alt="Second slide" />

        <Carousel.Caption>
          <h4>Second slide label</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img className="carouselImage" src={weights} alt="Third slide" />

        <Carousel.Caption>
          <h4>Third slide label</h4>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Tcarousel;
