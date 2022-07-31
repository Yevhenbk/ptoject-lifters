import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import CoachBlock from "../../component/CoachBlock/CoachBlock.jsx";

import "./CoachSide.scss";

function CoachSide() {
  return (
    <div className="luc__cc">
      <div className="coach-img__background">
        <CoachBlock />
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
