import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="contact-form__holder">
      <div className="contact__form">
        <div className="form__header">
          <h3>Contact Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            aspernatur, molestiae illum neque ipsum pariatur.
          </p>
        </div>
        <div className="form__inps-holder">
          <div className="contact__data">
            <div className="data__holder">
              <BsTelephoneFill className="data__icon" />
              <p className="data__title">Phone</p>
              <p className="data__p">+34643366764</p>
            </div>
            <div className="data__holder">
              <BsWhatsapp className="data__icon" />
              <p className="data__title">WhatsApp</p>
              <p className="data__p">+34643366764</p>
            </div>
            <div className="data__holder">
              <AiTwotoneMail className="data__icon" />
              <p className="data__title">Email</p>
              <p className="data__p">lostersios@gmail.com</p>
            </div>
          </div>
          <div className="vertical__brake" />
          <div className="contact__inputs">
            <input
              type="text"
              className="contact__input"
              placeholder="Nombre"
            />
            <input
              type="email"
              className="contact__input"
              placeholder="Email"
            />
            <input
              type="number"
              className="contact__input"
              placeholder="Telefono"
            />
            <textarea
              className="contact__textarea"
              placeholder="Your message"
            />
            <input type="button" className="contact__button" value="Submit" />
          </div>
        </div>
      </div>
      <div className="contact__header">
        <h3>Send us a message.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          aspernatur, molestiae illum neque ipsum pariatur dignissimos
          voluptatum aliquam magni quae.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
