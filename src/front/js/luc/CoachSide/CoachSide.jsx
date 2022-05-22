import React from "react";
import { RiInstagramLine } from "react-icons/ri";

import "./CoachSide.scss";

function CoachSide() {
  return (
    <div className="side__holder">
      <div className="coach-img__background">
        <div className="coach__info">
          <h1>Introducing your Coach, Antonio Torres</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quidem tenetur explicabo laudantium ullam quis. Aperiam voluptate
            molestiae nostrum, praesentium deleniti tenetur illum quia possimus
            odit magnam eligendi eum. Nulla.
          </p>
          <div className="ul-side__holder">
            <ul>
              <li>CF-Level 1</li>
              <li>KFIC Nivel 1 Y 2</li>
              <li>Técn. Halterofilia Nivel 1</li>
              <li>P.Trainer NSCA</li>
              <li>Seleccionador asturiano 13/14</li>
              <li>
                Fundador{" "}
                <a herf="#" className="span__cover">
                  @escuelaastur
                </a>{" "}
                04 The House Of Lifters 18
              </li>
            </ul>
            <a
              href="https://www.instagram.com/toni_torres_entrenador/"
              className="coach__insta"
            >
              <RiInstagramLine />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachSide;
