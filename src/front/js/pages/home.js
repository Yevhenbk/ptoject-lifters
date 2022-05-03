import React, { useContext } from "react";
import { Context } from "../store/appContext";
import LucNav from '../luc/Navbar/LucNav.jsx';
import Slider from "../luc/Slider/Slider.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className='luc__home'>
			<LucNav />
			<Slider />
		</div>
	);
};
