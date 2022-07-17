import React from "react";
import OpenCard from "../../component/Cards/Open/OpenCard.jsx";

import "./OpenCards.scss";

const OpenCards = () => {
  return (
    <div className="open__cards">
      <div className="open__tarifs">
        <div className="tarifs__first">
          <h2>Nuestras Tarifas.</h2>
          <h2>¡Incluye uso de maquinas de musculacion y mancuernas!</h2>
        </div>
        <div className="tarifs__cards">
          <OpenCard
            price="59"
            span="99"
            text="¡Sesiones ilimitadas por semana!"
            title="Beyond the limits"
            desc="Halterofilia (Pista Coberta): Ilimitado"
          />
          <OpenCard
            price="59"
            span="99"
            text="¡Sesiones ilimitadas por semana!"
            title="Beyond the limits"
            desc="Halterofilia (Pista Coberta): Ilimitado"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenCards;
