import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Setlogin from "../component/Login/SetLogin.jsx";
import LucNav from "../luc/Navbar/LucNav.jsx";

export const Login = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="login">
            <LucNav />
            <Setlogin />
        </div>
    );
};