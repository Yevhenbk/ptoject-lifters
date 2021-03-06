const BASE_URL = "https://3001-yevhenbk-ptojectlifters-5ss2opg1lbm.ws-eu54.gitpod.io/api/";


const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {

			islogged: false,
			clases: [],
			accounts: []

		},
		actions: {

			login: data => {
				console.log(data);
				const redirectToHome = () => {
					if (localStorage.getItem("role") === "1") {
						location.replace("admin");
					}
				};
				fetch(BASE_URL + "login", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					}
				})
					.then(resp => {
						if (resp.status === 200) {
							console.log(resp);
							return resp.json();
						} else if (resp.status === 401) {
							console.log("Invalid data");
						} else if (resp.status === 400) {
							console.log("Invalid email / password");
						} else throw Error("Something went wrong");
					})
					.then(data => {
						console.log("token" + data.token);
						localStorage.setItem("token", data.token);
						localStorage.setItem("name", data.name);
						localStorage.setItem("role", data.role);
						setStore({ islogged: true });
						redirectToHome();
					})
					.catch(error => {
						console.error("Unknown error", error);
						setStore({ islogged: false });
					});
			},

			logOut: () => {
				localStorage.removeItem("token");
				setStore({ islogged: false });
				//redirect("/home");
			},

			setLoggedIn: () => {
				setStore({ islogged: true });
			},
			setLoggedOut: () => {
				setStore({ islogged: false });
			},

			registerAdmin: data => {
				fetch(BASE_URL + "admin", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					},
					body: JSON.stringify(data)
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid info");
						}
						// console.log(response.json)
						return response.json();

					})
					.then(responseAsJson => {
						localStorage.setItem("token", responseAsJson);
					})
					.catch(error => console.error("Unknown error", error));
			},

			signupFed: data => {
				fetch(BASE_URL + "federated", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					},
					body: JSON.stringify(data)
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid info");
						}
						// console.log(response.json)
						return response.json();

					})
					.then(responseAsJson => {
						localStorage.setItem("token", responseAsJson);
					})
					.catch(error => console.error("Unknown error", error));
			},

			addClasses: data => {
				fetch(BASE_URL + "admin/classes", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Sec-Fetch-Mode": "no-cors"
					},
					body: JSON.stringify(data)
				})
					.then(resp => {
						if (!resp.ok) {
							throw Error("Invalid info");
						}
						console.log(response.json)
						return response.json();

					})
					.catch(error => console.error("Unknown error", error));
			},

			getClasses: (data, id) => {
				console.log(data);
				fetch(BASE_URL + "clases", {
					method: "GET",
					headers: new Headers({ "Content-Type": "application/json", "Sec-Fetch-Mode": "no-cors" })
				})
					.then(function (response) {
						if (!response.ok) {
							throw Error("I can't load a service");
						}
						return response.json();
					})
					.then(function (responseAsJson) {
						setStore({ clases: responseAsJson });
					})
					.catch(function (error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},


			getAccs: (data, id) => {
				console.log(data);
				fetch(BASE_URL + "accounts", {
					method: "GET",
					headers: new Headers({ "Content-Type": "application/json", "Sec-Fetch-Mode": "no-cors" })
				})
					.then(function (response) {
						if (!response.ok) {
							throw Error("I can't load a service");
						}
						return response.json();
					})
					.then(function (responseAsJson) {
						setStore({ accounts: responseAsJson });
					})
					.catch(function (error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}




			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			// getMessage: () => {
			// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },
			// changeColor: (index, color) => {
			//get the store
			// const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			// const demo = store.demo.map((elm, i) => {
			// 	if (i === index) elm.background = color;
			// 	return elm;
			// });

			//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;