import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	function mandarTodos() {
		let data = [
			{
				label: "tarea1",
				done: false
			},
			{
				label: "tarea2",
				done: false
			},
			{
				label: "tarea3",
				done: false
			},
			{
				label: "tarea4",
				done: false
			},
			{
				label: "tarea5",
				done: false
			}
		];
		let infoNecesaria = {
			method: "PUT",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		};
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/profemaca",
			infoNecesaria
		)
			.then(res => res.json())
			.then(respuesta => console.log(respuesta))
			.catch(error => console.log("alog paso", error));
	}
	//mandarTodos();
	function getTodos() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/profemaca")
			.then(res => res.json())
			.then(respuesta => console.log(respuesta))
			.catch(error => console.log("alog paso", error));
	}
	getTodos();
	return (
		<div className="text-center mt-5">
			<h1>api todos</h1>
		</div>
	);
};

export default Home;
