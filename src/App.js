import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

export default function App() {
	return (
		<div className="App">
			<h1 className="header">
				{" "}
				<span className="font-weight-lighter">Weather</span> Forecast
			</h1>
			<div className="container">
				{" "}
				<Weather defaultCity="New York" />
			</div>
			<footer className="footer">
				This project was coded by{" "}
				<a
					href="https://www.linkedin.com/in/victoria-moretti-934a2325a/"
					target="_blank"
					rel="noreferrer"
				>
					Victoria Moretti
				</a>{" "}
				and is{" "}
				<a
					href="https://github.com/vickymoretti"
					target="_blank"
					rel="noreferrer"
				>
					Open-source
				</a>
			</footer>
		</div>
	);
}
