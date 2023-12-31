import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<div className="container-fluid">
			{/* <a className="navbar-brand" href="/">Navbar</a> */}
			<Link className="navbar-brand" to="/">Navbar</Link>

			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					{/* <li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Inicio</a>
					</li> */}
					<li className="nav-item">
						<Link className="nav-link" to="/lista-tareas">Lista de Tareas</Link>
					</li>

					<li className="nav-item">
						<Link className="nav-link" to="/contacto">Contacto</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	);
};
