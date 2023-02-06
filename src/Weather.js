import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
	const [ready, setReady] = useState(false);
	const [weatherData, setWeatherData] = useState({});

	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			temperature: response.data.main.temp,
			wind: 12,
			city: response.data.city,
		});
		setReady(true);
	}

	if (ready) {
		return (
			<div className="Weather">
				<form>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Search city.."
								className="form-control"
							/>
						</div>
						<div className="col-3">
							<input
								type="submit"
								value="Search"
								className=" btn btn-primary"
							/>
						</div>
					</div>
				</form>
				<h1>{weatherData.city} </h1>
				<ul>
					<li>Wednesday 07:00</li>
					<li>Mostly Cloudy</li>
				</ul>
				<div className="row">
					<div className="col-6">
						<img
							src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
							alt="Mostly Cloudy"
						/>{" "}
						<span className="unit">{Math.round(weatherData.temp)} °C</span>
					</div>
					<div className="col-6">
						<ul>
							<li>Precipitaion: 15%</li>
							<li>Humidity: 72%</li>
							<li>Wind:{weatherData.wind} km/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "f93674534fd7bbf098e9c23dbb1ce46d";
		let city = "New York";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return "Loading...";
	}
}
