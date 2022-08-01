import React, { useEffect, useState } from "react";
import CardSlider from "../../component/CardSlider/CardSlider.jsx";
import { GiArrowhead } from "react-icons/gi";

import "./SemiCards.scss";

const SemiCards = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="semi">
        <div className="hor__brake-holder">
          <div className="left-al">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div className="hr" />
            <h2>Discover more</h2>
          </div>

          <div className="gg">
            <div className="brake-holder">
              <div className="braked-class">
                <div className="circle-br">1</div>
                <div>
                  <h4>Lorem ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi repellendus aliquam.
                  </p>
                </div>
              </div>
              <div className="braked-class">
                <div className="circle-br">2</div>
                <div>
                  <h4>Lorem ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi repellendus aliquam.
                  </p>
                </div>
              </div>
            </div>
            <div className="brake-holder">
              <div className="braked-class">
                <div className="circle-br">3</div>
                <div>
                  <h4>Lorem ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi repellendus aliquam.
                  </p>
                </div>
              </div>
              <div className="braked-class">
                <div className="circle-br">4</div>
                <div>
                  <h4>Lorem ipsum</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi repellendus aliquam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background__text">
          {/* <h1
          className="sticky__header"
          style={{
            transform: `translateY(${offsetY * 0.94}px)`,
            position: `relative`,
            top: `-1100px`,
          }}
        >
          Lorem, ipsum dolor
          <br />
          sit amet consectetur
        </h1> */}
          <div className="card__slider-holder">
            <CardSlider
              style={{
                transform: `translateY(-${offsetY * 0.14}px)`,
                position: `relative`,
                top: `200px`,
              }}
            />
            <CardSlider
              style={{
                transform: `translateY(-${offsetY * 0.24}px)`,
                position: `relative`,
                top: `200px`,
                right: `100px`,
              }}
            />
            <CardSlider
              style={{
                transform: `translateY(-${offsetY * 0.44}px)`,
                position: `relative`,
                top: `1000px`,
                left: `100px`,
              }}
            />
            <CardSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default SemiCards;
