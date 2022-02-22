import React from "react";
import noimg from "../../img/noimage.jpg";
import "../../styles/info.scss";

const Info = () => {
  return (
    <div className="info-holder">
      <div className="info-sec-one">
        <p>
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum alias
          fugiat autem quis qui enim doloribus, sint, expedita, ab hic error non
          dolore veniam deserunt. Quod adipisci aperiam rerum ipsam."
        </p>
        <img src={noimg} className="info-img" />
      </div>
      <div className="info-sec-two">
        <p className="marks-p">
          Deporte con una historia milenaria. El levantamiento de pesas es
          historia viva del ser humano, sin importar la civilización o el pais
          de origen. El pesista es un atleta fuerte, rápido, con una condición
          física suprema y una gran capacidad de concentración. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Earum, incidunt.
          Quibusdam necessitatibus voluptatibus dolor eos ex voluptatum
          molestias, odio dicta quia debitis laudantium sit? Soluta nemo
          mollitia rem quia temporibus!
        </p>
      </div>
    </div>
  );
};

export default Info;
