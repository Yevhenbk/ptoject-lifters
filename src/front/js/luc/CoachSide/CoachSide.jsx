import React, { useEffect, useState } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import noimage from "../../../img/noimage.jpg";

import "./CoachSide.scss";

function CoachSide() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="luc__cc">
      <div className="coach-img__background">
        <img
          src={noimage}
          className="coach-img"
          style={{
            transform: `translateY(${offsetY * -0.14}px)`,
          }}
        />
        <div className="coach__info">
          <h1>Introducing your coach, Antonio Torres</h1>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quidem tenetur explicabo laudantium ullam quis. Aperiam voluptate
            molestiae nostrum, praesentium deleniti."
          </p>
          <div className="ul-side__holder">
            <ul>
              <AiFillSafetyCertificate className="icon-l" />

              <li>CF-Level 1</li>
              <li>KFIC Nivel 1 Y 2</li>
              <li>Técn. Halterofilia Nivel 1</li>
              <li>P.Trainer NSCA</li>
              <li>Seleccionador asturiano 13/14</li>
              <li>Fundador escuelaastur 04 The House Of Lifters 18</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachSide;
