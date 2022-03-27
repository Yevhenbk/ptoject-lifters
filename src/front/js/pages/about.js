import React from "react";

import Navbarsecond from "../component/navbarsecond.jsx";
import Coachesside from "../component/coachesside.jsx";

export const About = () => {

    return (
        <div className="about">
            <Navbarsecond />
            <div className="title-page">
                <h2>About Us</h2>
            </div>
            <Coachesside />
        </div>
    );
};