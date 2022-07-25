import React from "react";
import Iframe from "react-iframe";

import "./Installs.scss";

const Installs = () => {
  return (
    <div className="installs-holder">
      <div className="installs ">
        <div className="installs-section-one ">
          <h1 className="installs-title">Instalaciones</h1>
          <p className="installs-text">
            Formarmos parte del Madsport Academy, quienes también ofrecen clases
            de calistenia, CrossFit, boxeo, MMA, krav maga, fitboxing, tiendas
            de halterofilia y más. Nuestro gimnasio incluye 8 plataformas,
            bloques de jerk, racks y más disponible a nuestros alumnos con su
            membresía. Todos nuestros alumnos pueden usar las instalaciones sin
            límite cuando clase no está en sesión.{" "}
          </p>
        </div>

        <Iframe
          src="https://maps.google.com/maps?q=Calle%20de%20Miguel%20Yuste,%2043&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          className="frame "
        />
      </div>
    </div>
  );
};

export default Installs;
