import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Welcome from "../component/welcome.jsx";
import Tcarousel from "../component/carousel.jsx";
import Cards from "../component/cards.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home">
			<Welcome />
			<Tcarousel />
			<Cards />
		</div>
	);
};
