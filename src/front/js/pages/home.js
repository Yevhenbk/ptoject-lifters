import React, { useContext } from "react";
import { Context } from "../store/appContext";
import LucNav from '../luc/Navbar/LucNav.jsx';
import Slider from "../luc/Slider/Slider.jsx";
import Opinions from "../luc/Opinions/Opinions.jsx";
import Info from "../luc/Info/Info.jsx";
import Sections from "../luc/Sections/Sections.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className='luc__home'>
			<LucNav />
			<Slider />
			<Opinions />
			<Info />
			<Sections />
		</div>
	);
};
