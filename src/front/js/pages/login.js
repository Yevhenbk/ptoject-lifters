import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Setlogin from '../component/setlogin.jsx';
import Navbarsecond from '../component/navbarsecond.jsx';
import Navbar from '../component/navbar.jsx';

export const Login = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="login">
            <Navbarsecond />
            <Setlogin />
        </div>
    );
};