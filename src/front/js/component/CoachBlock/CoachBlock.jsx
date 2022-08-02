import React, { useEffect, useState } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import noimage from "../../../img/noimage.jpg";

import "./CoachBlock.scss";

function CoachBlock() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="coach__block-holder">
      <div className="sup">
        <div className="coach-tr" />
        <img
          src={noimage}
          className="coach-img"
          // style={{
          //   transform: `translateY(${offsetY * -0.14}px)`,
          // }}
        />
        <div className="coach-br" />
      </div>
    </div>
  );
}

export default CoachBlock;
