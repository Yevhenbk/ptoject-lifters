import React from "react";

import "./ContactForm.scss";
import "../../../styles/modals.scss";

const ContactForm = () => {
  return (
    <div className="contact-form__holder">
      <div className="contact__form">
        <div className="form__header">
          <h3>Contact Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            aspernatur, molestiae illum neque ipsum pariatur dignissimos
            voluptatum aliquam magni quae, laborum consequuntur ab ipsam
            provident, autem facilis necessitatibus.
          </p>
        </div>
        <div className="form__inps-holder">
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
          </div>
          <div className="contact__inputs">
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
