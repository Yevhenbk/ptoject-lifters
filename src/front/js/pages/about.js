import React from "react";

import Info from "../component/info.jsx";
import Navbarsecond from "../component/navbarsecond.jsx";
import Coachesside from "../component/coachesside.jsx";

export const About = () => {

    return (
        <div className="about">
            <Navbarsecond />
            <div className="title-page">
                <h2>About Us</h2>
            </div>
            <Info
                id="ab-card-one"
                title="Our mission"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            ducimus optio fugiat odio beatae, rerum doloremque, id corrupti iusto
            accusamus soluta! Ea, earum eaque illum ullam accusantium atque
            possimus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Assumenda ducimus optio fugiat odio beatae, rerum doloremque, id
            corrupti iusto accusamus soluta!" />
            <Info
                id="ab-card-two"
                title="Our vision"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            ducimus optio fugiat odio beatae, rerum doloremque, id corrupti iusto
            accusamus soluta! Ea, earum eaque illum ullam accusantium atque
            possimus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Assumenda ducimus optio fugiat odio beatae, rerum doloremque, id
            corrupti iusto accusamus soluta!" />
            <Info
                id="ab-card-three"
                title="Our values"
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            ducimus optio fugiat odio beatae, rerum doloremque, id corrupti iusto
            accusamus soluta! Ea, earum eaque illum ullam accusantium atque
            possimus nisi. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Assumenda ducimus optio fugiat odio beatae, rerum doloremque, id
            corrupti iusto accusamus soluta!" />
            <Coachesside />
        </div>
    );
};