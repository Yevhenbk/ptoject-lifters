import React, { useEffect, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";

const Navbar = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAccs();
  }, []);
  console.log(localStorage);

  return (
    <nav
      collapseonselect="true"
      expand="lg"
      className="navbar ff-nav fixed-top navbar-expand-lg"
    >
      <div className="container">
        <h4 className="navbar-logo-second">Logo</h4>
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
            <li>
              {!store.islogged ? (
                <Link to="/login" className="menu-href">
                  Login
                </Link>
              ) : localStorage.getItem("role") === "1" ? (
                <Dropdown className="ff-ones">
                  <Dropdown.Toggle id="dropdown-basic">
                    Hola, {localStorage.getItem("name")}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/profile" className="menu-href">
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
                  <Dropdown.Toggle id="dropdown-basic">
                    Hola, {localStorage.getItem("name")}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={actions.logOut}>
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
