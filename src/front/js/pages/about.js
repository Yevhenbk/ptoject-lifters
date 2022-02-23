import React from "react";
import Opener from "../component/opener.jsx";
import Info from "../component/info.jsx";
import Installs from "../component/installs.jsx";

export const About = () => {

    return (
        <div className="about">
            <Opener title="About Us"
                img="https://img.icons8.com/officel/500/000000/about.png"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            ullam a repellendus beatae assumenda adipisci et, veritatis neque
            earum facilis, repellat aut delectus, porro natus dolorem provident
            consectetur nisi commodi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit." />
            <Info />
            <Installs />
        </div>
    );
};