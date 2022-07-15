import React from "react";
import OpenCard from "../../component/Cards/Open/OpenCard.jsx";

import "./OpenCards.scss";

const OpenCards = () => {
  return (
    <div className="open__cards">
      <div className="open__tarifs">
        <div className="tarifs__first">
          <h2>Tarifas</h2>
          <p>¡Incluye uso de maquinas de musculacion!</p>
        </div>
        <div className="tarifs__cards">
          <OpenCard
            price="59"
            span="99"
            text="Lorem ipsum"
            title="Lorem ipsum"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenCards;
