import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Welcome from "../component/welcome.jsx";
import Tcarousel from "../component/carousel.jsx";
import Representatives from "../component/representatives.jsx";
import Opinions from "../component/opinions.jsx";
import Installs from "../component/installs.jsx";
import Navbar from "../component/navbar.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home">
			<Navbar />
			<Welcome />
			<Tcarousel />
			<Representatives />
			<Opinions />
			<Installs />
		</div>
	);
};
