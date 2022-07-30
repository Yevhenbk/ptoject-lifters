import React, { useState, useEffect, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./Navbarmenu.scss";

export const Navbarmenu = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAccs();
  }, []);
  console.log(localStorage);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      actions.setLoggedIn();
    } else {
      actions.setLoggedOut();
    }
    function checkUserData() {
      const token = localStorage.getItem("token");
      console.log("hello");

      if (token) {
        actions.setLoggedIn();
      } else {
        actions.setLoggedOut();
      }
    }

    window.addEventListener("storage", checkUserData);

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);

  return (
    <div className="menu__body">
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu__btn">
        <span />
      </label>
      <label htmlFor="active" className="close" />
      <div className="wrapper">
        <ul>
          <li>
            <Link to="/" className="menu__href">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className="menu__href">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="menu__href">
              Clases de Halterofilia
            </Link>
          </li>
          <li>
            <Link to="/" className="menu__href">
              Equipo de competicion
            </Link>
          </li>
          <li>
            <Link to="/" className="menu__href">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/" className="menu__href">
              Blog
            </Link>
          </li>
          {/* <li>
            {!store.islogged ? (
              <Link to="/login" className="menu__href">
                Login
              </Link>
            ) : localStorage.getItem("role") === "1" ? (
              <Dropdown>
                <Dropdown.Toggle id="dropdown__basic">
                  Hola, {localStorage.getItem("name")}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/profile" className="menu__href">
                      Mi Perfil
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={actions.logOut}>
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Dropdown>
                <Dropdown.Toggle id="dropdown__basic">
                  Hola, {localStorage.getItem("name")}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={actions.logOut}>
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </li> */}
        </ul>
      </div>
    </div>
  );
};
