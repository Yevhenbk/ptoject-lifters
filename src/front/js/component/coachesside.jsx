import React from "react";
import "../../styles/coachesside.scss";
import quotes from "../../img/quotes.png";
import noimage from "../../img/noimage.jpg";

const Coachesside = () => {
  return (
    <div className="coaches-side">
      <div className="side-first">
        <img src={noimage} className="coaches-img" />
        <h4>Toni Torres</h4>
        <p>Main coach</p>
      </div>
      <div className="side-second">
        <div className="testimonials-holder">
          <div className="vertical-side" />
          <div className="testimonials-icon">
            <img src={quotes} className="icon-quote" />
          </div>
          <div className="vertical-side" />
        </div>
        <p className="testimonials-quote">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos
          aliquam doloribus illo impedit reiciendis? Nostrum, minima, mollitia
          velit molestiae rerum recusandae eius eaque incidunt nobis, facilis
          soluta qui deleniti."
        </p>
      </div>
    </div>
  );
};

export default Coachesside;
