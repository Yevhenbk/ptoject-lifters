import React from "react";
import Opener from "../component/opener.jsx";
import Info from "../component/info.jsx";
import Installs from "../component/installs.jsx";

export const About = () => {

    return (
        <div className="about">
            <Opener />
            <Info />
            <Installs />
        </div>
    );
};