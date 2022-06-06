import React from "react";
import FadeInSection from "../../component/FadeInSection/FadeInSection.jsx";
import FadeOutSection from "../../component/FadeInSection/FadeOutSection.jsx";
import FadeInOutSection from "../../component/FadeInSection/FadeInOutSection.jsx";
import { AiFillSafetyCertificate } from "react-icons/ai";
import noimage from "../../../img/noimage.jpg";

import "./CoachSide.scss";

function CoachSide() {
  return (
    <div className="coach-img__background">
      <img src={noimage} className="coach-img" />
      <div className="coach__info">
        <FadeInSection>
          <h1>Introducing your coach, Antonio Torres</h1>
        </FadeInSection>
        <FadeOutSection>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quidem tenetur explicabo laudantium ullam quis. Aperiam voluptate
            molestiae nostrum, praesentium deleniti."
          </p>
        </FadeOutSection>
        <FadeInOutSection>
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
        </FadeInOutSection>
      </div>
    </div>
  );
}

export default CoachSide;
