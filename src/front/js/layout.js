import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Clases } from "./pages/clases";
import { Competitors } from "./pages/competitors";
import injectContext from "./store/appContext";
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import "../styles/globals.scss";

const Layout = () => {
	//the basename is used when the project is published in a subdirectory and not in the root of the domain
	//can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/clases">
						<Clases />
					</Route>
					<Route exact path="/competitors">
						<Competitors />
					</Route>
					{/* <Route exact path="/single/:theid">
						<Single />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route> */}
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
