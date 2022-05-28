import React, { useEffect, useState } from "react";
import { ImWhatsapp } from "react-icons/im";
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
        <FadeInSection>
          <h1>Join Us Now</h1>
        </FadeInSection>
      </div>
      <div className="secondary-form">
        <form action="" method="post" className="modal__form">
          <div className="mm__body">
            <div className="inps">
              <FadeInSection>
                <h3>Solicita tu clase gratis</h3>
              </FadeInSection>
              <div className="inputs__holder">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="inputs__ls ls__third"
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="inputs__ls ls__third"
                  placeholder="Telefono"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="inputs__ls ls__third"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="mm__footer">
              <input type="submit" value="Submit" className="signup__button" />
            </div>
          </div>
          <div className="textarea__holder">
            <textarea className="textarea"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
