import React, { useContext, useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import Card from "../component/Card.jsx";


//1.- importar de react el hook useContext
//2.- Importamos del AppContext el contexto de la apluicación 
//3.- User el contexto ( destructuring)
//4.- usar el store

const Home = () => {
	const { store } = useContext(Context)


	return (
		<>
			<div className="container">

				<h1>Hola desde el home componente de vista</h1>

				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, magnam facilis dolorum atque ratione,
					quaerat id et quod eveniet voluptatum aliquid cupiditate accusamus ex veritatis in. Dolor dolorum iusto rem.</p>

				<h1>Bien y tu</h1>

			</div>

			<div className="container">
				<div className="row">
					{store.character.map((item) => {
						return (
							<Card key={item.id} character={item} />
						)
					})}
				</div>
			</div>

		</>
	)
}


export default Home;