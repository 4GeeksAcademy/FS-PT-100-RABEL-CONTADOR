import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import contarSegundos from "./Contador.jsx";

const Home = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prev => prev + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="text-center">
			{contarSegundos({ seconds })}

			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} alt="Rigo Baby" />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!
			</p>
		</div>
	);
};

export default Home;
