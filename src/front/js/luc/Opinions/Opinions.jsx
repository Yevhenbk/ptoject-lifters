import React, { useState } from "react";
import Card from "../../component/Cards/Opinions/Card.jsx";
import CardFree from "../../component/Cards/Opinions/CardFree.jsx";
import "./Opinions.scss";

const Opinions = () => {
  return (
    <div className="opinions-holder">
      <div className="opinions">
        <div className="horizontal__brake" />
        <div className="op__headers">
          <h1 className="op-header-text">¿Qué dicen de nosotros?</h1>
          <p className="op-header-p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ex
            autem amet nostrum here.
          </p>
        </div>
        <input type="radio" name="dot" id="one" className="radio-but" />
        <input type="radio" name="dot" id="two" className="radio-but" />
        <div className="op-cards-holder">
          <div className="op-cards">
            <CardFree
              img="https://lh3.googleusercontent.com/a-/AOh14GiTBJgQXVJpP1TLVepUMZgjXNU9C-lkxMizBmPXbw=w45-h45-p-c0x00000000-rp-mo-br100"
              name="Iván Pérez"
              rating={5}
              text="Ya sea porque quieres competir, porque quieres depurar la técnica o simplemente empezar, este es el sitio donde la mejora técnica importa tanto como la mejora en las marcas.

            Grandes profesionales que han conseguido que los alumnos sean una gran familia"
            />
            <div className="op__grouped">
              <Card
                img="https://lh3.googleusercontent.com/a-/AOh14GhesxpQg56-QScfLW2j985LntsFMUgm9FE3fowH9A=w72-h72-p-c0x00000000-rp-mo-br100"
                name="Coke Perez"
                rating={5}
                className="grouped__op__card"
                text="Sin duda el mejor sitio que conozco donde enseñan la técnica correcta y al más puro estilo olímpico de la halterofilia. Lo recomiendo para todo aquel que quiera pulir al detalle sus movimientos y sacar el máximo partido a este deporte."
              />
              <Card
                img="https://lh3.googleusercontent.com/a-/AOh14GivAf9-7tWSuTvGw37FYVaO_LzVyCDiTaAjcVf5fg=w72-h72-p-c0x00000000-rp-mo-br100"
                name="NoeliaParra"
                rating={5}
                className="grouped__op__card"
                text='Si te gusta o te llama la atención la halterofilia, hay que venir aquí para probarlo.
            No importa que levantes más, levantes menos, tengas técnica o no, es un club que desde el primer día te acogen todos los compañeros, el buen rollo está asegurado, y todo de la mano de un gran profesional como Toni, donde no existen los "no puedo".
            Gracias :)'
              />
            </div>
          </div>
          <div className="op-cards">
            <Card
              img="https://lh3.googleusercontent.com/a-/AOh14Gjc_5E8O7TP46hPM5luG76S6azjkfcqwOVlTxDT0Q=w75-h75-p-rp-mo-br100"
              name="Victor Siankope"
              rating={5}
              text="El mejor lugar donde aprender halterofilia en Madrid para todas las edades. Además dispone de un club de competidores donde también empezar a entrar en el mundo de la competición. Puedes ir y solicitar tu clase de prueba gratuita!!!"
            />
            <Card
              img="https://lh3.googleusercontent.com/a-/AOh14GiutJHsAEA7nGl8J4AR4z0QGPW7ymzTBhWnM6nWyg=w72-h72-p-c0x00000000-rp-mo-br100"
              name="Inma Parrilla"
              rating={5}
              text="Grandísimo centro de entrenamiento para alcanzar las mejores marcas con la ayuda del mejor coach en Halterofilia que se puede tener. El ambiente, la profesionalidad y los compañeros son excepcionales. Lo recomiendo al 100 por 100."
            />
            <Card
              img="https://lh3.googleusercontent.com/a-/AOh14Gg-8OZqnDLJcTqRMcnPXXfG1frxnRQ1ptX-TatU=w45-h45-p-c0x00000000-rp-mo-br100"
              name="Sara Caballero"
              rating={5}
              text="Un gran club, tanto por la gente como por la profesionalidad. Son geniales 👏🏻👏🏻👏🏻"
            />
          </div>
        </div>
        <div className="op-buttons">
          <label htmlFor="one" className="one active" />
          <label htmlFor="two" className="two" />
        </div>
      </div>
    </div>
  );
};

export default Opinions;
