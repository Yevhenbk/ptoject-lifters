import React, { useEffect, useState } from "react";
import Card from "../../component/Cards/Opinions/Card.jsx";
import CardFree from "../../component/Cards/Opinions/CardFree.jsx";

import "./Opinions.scss";

const Opinions = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="opinions__holder">
      <div className="opinions">
        <div className="op__headers">
          <h1 className="op__header__text">¿Qué dicen de nosotros?</h1>
          <p className="op__header__p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ex
            autem amet nostrum here.
          </p>
        </div>

        <div className="op__cards__holder">
          <div className="op__cards">
            <CardFree
              img="https://lh3.googleusercontent.com/a-/AOh14Gjc_5E8O7TP46hPM5luG76S6azjkfcqwOVlTxDT0Q=w75-h75-p-rp-mo-br100"
              name="Victor Siankope"
              rating={5}
              text="El mejor lugar donde aprender halterofilia en Madrid para todas las edades. Además dispone de un club de competidores donde también empezar a entrar en el mundo de la competición. Puedes ir y solicitar tu clase de prueba gratuita!!!"
            />
            <div
              className="op__grouped"
              style={{
                transform: `translateY(-${offsetY * 0.14}px)`,
              }}
            >
              <div className="hidden__card">
                <Card
                  img="https://lh3.googleusercontent.com/a-/AOh14Gjc_5E8O7TP46hPM5luG76S6azjkfcqwOVlTxDT0Q=w75-h75-p-rp-mo-br100"
                  name="Victor Siankope"
                  rating={5}
                  className="grouped__op__card"
                  text="El mejor lugar donde aprender halterofilia en Madrid para todas las edades. Además dispone de un club de competidores donde también empezar a entrar en el mundo de la competición. Puedes ir y solicitar tu clase de prueba gratuita!!!"
                />
              </div>

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
        </div>
      </div>
    </div>
  );
};

export default Opinions;
