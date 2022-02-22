import React from "react";
import Opener from "../component/opener.jsx";
import Table from "../component/table.jsx";


export const Clases = () => {

    return (
        <div className="clases">
            <Opener
                img="https://img.icons8.com/external-flat-juicy-fish/500/000000/external-lifting-gym-life-flat-flat-juicy-fish-2.png"
                title="Clases"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            ullam a repellendus beatae assumenda adipisci et, veritatis neque
            earum facilis, repellat aut delectus, porro natus dolorem provident
            consectetur nisi commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit." />
            <Table />
        </div>
    );
};