import React from "react";
import Table from "../component/table.jsx";
import Navbarsecond from "../component/navbarsecond.jsx";


export const Clases = () => {

    return (
        <div className="clases">
            <Navbarsecond />
            <div className="title-page">
                <h2>Clases de Halterofilia</h2>
            </div>
            <div className="table-s">
                <Table />
                <div className="saying">
                    <h2>Some title</h2>
                    <p>Deporte con una historia milenaria. El levantamiento de pesas es
                        historia viva del ser humano, sin importar la civilización o el pais
                        de origen. El pesista es un atleta fuerte, rápido, con una condición
                        física suprema y una gran capacidad de concentración.
                    </p>
                </div>
            </div>
        </div>
    );
};