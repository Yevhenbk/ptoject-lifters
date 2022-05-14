import React, { useEffect, useState } from "react";
import { GiStrongMan } from "react-icons/gi";
import { IoMdMan } from "react-icons/io";
import { GiWeightLiftingUp } from "react-icons/gi";
import cardFirst from "../../../img/im6.jpeg";
import cardSecond from "../../../img/im2.jpeg";

import "./Info.scss";

const Info = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="info__holder">
      <div className="info">
        <div className="info__states">
          <div className="info__state">
            <IoMdMan className="state__icon" />
            <h3>Mejora de la capacidad de concentración</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              repellendus aliquam.
            </p>
          </div>
          <div className="info__state">
            <GiWeightLiftingUp className="state__icon" />
            <h3>Aprendizaje y perfeccionamiento técnico</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              repellendus aliquam.
            </p>
          </div>
          <div className="info__state">
            <GiStrongMan className="state__icon" />
            <h3>Mejora de potencia y fuerza muscular</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              repellendus aliquam.
            </p>
          </div>
        </div>
        <div className="block__wrapper">
          <div className="info__block">
            <img
              className="block__img__one"
              src={cardFirst}
              style={{
                transform: `translateY(${offsetY * 0.04}px) rotate(-3deg)`,
              }}
            ></img>
            <img
              className="block__img__two"
              src={cardSecond}
              style={{
                transform: `translateY(-${offsetY * 0.04}px) rotate(2deg)`,
              }}
            ></img>
          </div>
          <div className="info__par">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              molestiae placeat, cumque eaque necessitatibus dolorum?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              repellendus aliquam in ea eius animi voluptates temporibus non
              sunt recusandae architecto minus nam voluptatibus inventore atque,
              fugiat deserunt nemo doloribus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dicta, ratione fugiat! Esse iste
              obcaecati facilis, dolore qui dolores odio quidem, nemo nobis
              perspiciatis ducimus quaerat? Laudantium necessitatibus voluptates
              exercitationem laboriosam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
