import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Login from "./login.jsx";
import "../../styles/navbar.scss";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { store, actions } = useContext(Context);

  const showColor = () => {
    if (window.scrollY >= 373.4) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

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

  window.addEventListener("scroll", showColor);

  return (
    <nav
      collapseOnSelect
      expand="lg"
      className={
        navbar
          ? "navbar active-nav fixed-top navbar-expand-lg z-depth-5"
          : "navbar fixed-top navbar-expand-lg z-depth-5"
      }
    >
      <div className="container">
        <h4 className="navbar-logo">Logo</h4>
        <div className="wrapper-first">
          <ul>
            <li>
              <Link to="/about" className="menu-href">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/clases" className="menu-href">
                Clases
              </Link>
            </li>
            <li>
              <Link to="/competitors" className="menu-href">
                Equipo
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-href">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-href">
                Productos
              </Link>
            </li>
            <li>{!store.islogged ? <Login /> : <p>Hola</p>}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
