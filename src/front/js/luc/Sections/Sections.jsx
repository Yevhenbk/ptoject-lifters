import React, { useState, useEffect } from "react";
import SectionsCard from "../../component/Cards/SectionsCard/SectionsCard.jsx";
import cardImg1 from "../../../img/im5.jpeg";

import "./Sections.scss";

const Sections = () => {
  return (
    <div className="sections__holder">
      <div className="sections">
        <div className="sections__text">
          <p className="spanner">Example text</p>
          <h1>Get inspired</h1>
          <p className="sections__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="sections__cards">
          <SectionsCard
            className="section__card__first"
            title="Some title here"
            text="And some text of course"
          />
          <SectionsCard
            className="section__card__second"
            title="Some title here"
            text="And some text of course"
          />
        </div>
      </div>
    </div>
  );
};

export default Sections;
