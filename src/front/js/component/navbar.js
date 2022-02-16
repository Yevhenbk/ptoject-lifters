import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login.jsx";
import "../../styles/navbar.scss";

export const Navbar = () => {

	const [navbar, setNavbar] = useState(false);

	const showColor = () => {
		if (window.scrollY >= 360.4) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", showColor);

	return (
		<nav collapseOnSelect
			expand="lg"
			className={
				navbar
					? "navbar active-nav fixed-top navbar-expand-lg z-depth-5"
					: "navbar fixed-top navbar-expand-lg z-depth-5"
			}>
			<div className="container">
				<h4 className="navbar-logo">Logo</h4>
				<div className="wrapper-first">
					<ul>
						<li>
							<Link to="/aboutUs" className="menu-href">
								About Us
							</Link>
						</li>
						<li>
							<Link to="/" className="menu-href">
								Clases
							</Link>
						</li>
						<li>
							<Link to="/" className="menu-href">
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
							<a
								href="https://www.google.com/maps/place/The+House+Of+Lifters/@40.4358317,-3.6248256,17z/data=!4m7!3m6!1s0xd422f4e610ce843:0x43df4bc2aac5cf56!8m2!3d40.4357427!4d-3.6229584!9m1!1b1"
								target="_blank"
								rel="noopener noreferrer"
								className="menu-href">
								Opiniones
							</a>
						</li>
						<li>
							<Login />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
