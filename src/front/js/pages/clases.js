import React from "react";
import Opener from "../component/opener.jsx";
import Table from "../component/table.jsx";
import Joinus from "../component/joinus.jsx";
import noimg from "../../img/noimage.jpg";


export const Clases = () => {

    return (
        <div className="clases">
            <Opener
                img={noimg}
                title="Clases"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            ullam a repellendus beatae assumenda adipisci et, veritatis neque
            earum facilis, repellat aut delectus, porro natus dolorem provident
            consectetur nisi commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit." />
            <Table />
            <Joinus />
        </div>
    );
};