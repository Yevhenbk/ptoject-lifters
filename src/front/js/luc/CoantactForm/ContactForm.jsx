import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../store/appContext.js";
import FadeInSection from "../../component/FadeInSection/FadeInSection.jsx";
import noimg from "../../../img/noimage.jpg";

import "./ContactForm.scss";
import "../../../styles/modals.scss";

const ContactForm = () => {
  return (
    <div className="contact-form__holder">
      <div className="form__title">
        <span className="title__row-left" />
        <FadeInSection>
          <h1>Join Us Now</h1>
        </FadeInSection>
        <span className="title__row-right" />
      </div>
      <div className="secondary-form">
        <FadeInSection>
          <div className="secondary__text">
            <h2>Tu + Tu esfuerzo + Nuestra experiencia</h2>
            <img src={noimg} className="logo__img-sec" />
          </div>
        </FadeInSection>
        <form action="" method="post" className="modal__form">
          <div className="mm__body">
            <FadeInSection>
              <p>
                Solicita tu clase <span className="span__cover">GRATIS</span>
              </p>
            </FadeInSection>
            <div className="inputs__holder">
              <input
                type="text"
                id="name"
                name="name"
                className="inputs__ls ls__second"
                placeholder="Nombre"
              />
              <input
                type="text"
                id="number"
                name="number"
                className="inputs__ls ls__second"
                placeholder="Telefono"
              />
              <input
                type="email"
                id="email"
                name="email"
                className="inputs__ls ls__first"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="mm__footer">
            <input type="submit" value="Submit" className="signup__button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;