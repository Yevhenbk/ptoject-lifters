import React, { useEffect, useState } from "react";
import Carousel from "../../component/carousel.jsx";
import SliderButton from "../../component/Buttons/Slider/SliderButton.jsx";
import FadeInSection from "../../component/FadeInSection/FadeInSection.jsx";
import FadeOutSection from "../../component/FadeInSection/FadeOutSection.jsx";
import FadeInOutSection from "../../component/FadeInSection/FadeInOutSection.jsx";

import "./Slider.scss";

const Slider = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="luc__slider">
      <div
        className="slider__section_one"
        style={{
          transform: `translateY(-${offsetY * 0.05}px)`,
        }}
      >
        <div className="inner__holder">
          <FadeInSection>
            <h1 className="header__one">
              Lorem ipsum dolor sit amet consectetur adip.
            </h1>
          </FadeInSection>
          <FadeOutSection>
            <p className="slider__paragraph">
              Deporte con una historia milenaria. El levantamiento de pesas es
              historia viva del ser humano, sin importar la civilización o el
              pais de origen. El pesista es un atleta fuerte, rápido, con una
              condición física suprema y una gran capacidad de concentración.
            </p>
          </FadeOutSection>
          <FadeInOutSection>
            <SliderButton />
          </FadeInOutSection>
        </div>
      </div>
      <div className="slider__section_two">
        <Carousel />
      </div>
    </div>
  );
};

export default Slider;
