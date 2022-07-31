import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { TiUser } from "react-icons/ti";
import { RiAdminFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { Context } from "../../store/appContext";
import { Navbarmenu } from "../../component/Navbarmenu/Navbarmenu.jsx";

import "./LucNav.scss";

const LucNav = () => {
  const [navbar, setNavbar] = useState(false);

  const showColor = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", showColor);

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
    <>
      <div
        className={
          navbar ? "luc__nav active__nav fixed-top" : "luc__nav fixed-top"
        }
      >
        <h3 className="header__three">Los Tercios</h3>
        <div className="luc__nav__icons">
          <div
            className={!store.islogged ? "over__logged nonne" : "over__logged "}
          />
          <AiFillInstagram className="icon__small" />
          {!store.islogged ? (
            <Link to="/login">
              <TiUser className="icon__grand" />
            </Link>
          ) : localStorage.getItem("role") === "1" ? (
            <div className="admin__logged">
              <RiAdminFill className="icon__grand" />
            </div>
          ) : (
            <Dropdown>
              <Dropdown.Toggle id="dropdown__basic">
                Hola, {localStorage.getItem("name")}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={actions.logOut}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          <div className="menu__grand">
            <Navbarmenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default LucNav;
