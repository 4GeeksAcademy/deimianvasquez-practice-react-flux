const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			currentUser: "Deimian",
			character: [],
			urlBase: "https://playground.4geeks.com/apis/fake/todos/user/deimian",
			allTask: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacter: async () => {
				try {
					let response = await fetch("https://rickandmortyapi.com/api/character")
					let data = await response.json()

					setStore({
						character: data.results
					})

				} catch (error) {
					console.log(error)
				}
			},
			//Esta funcio se trae las tareas
			getTask: async () => {
				let store = getStore()

				try {
					let response = await fetch(store.urlBase)
					let data = await response.json()

					if (response.ok) {
						setStore({
							allTask: data
						})
					}
					if (response.status == 404) {
						console.log("Creamos un usuario")
					}

				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
