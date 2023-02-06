import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });

	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			city: response.data.name,
			humidity: response.data.main.humidity,
			description: response.data.weather[0].description,
			date: new Date(response.data.dt * 1000),
			iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
		});
	}

	if (weatherData.ready) {
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
					<li>
						<FormatDate date={weatherData.date} />
					</li>
					<li className="text-capitalize">{weatherData.description}</li>
				</ul>
				<div className="row mt-3">
					<div className="col-6">
						<div className="d-flex">
							<div>
								{" "}
								<img
									src={weatherData.iconUrl}
									alt={weatherData.description}
								/>{" "}
							</div>
							<div className="unit">{Math.round(weatherData.temperature)}</div>{" "}
							°C
						</div>
					</div>
					<div className="col-6">
						<ul>
							<li>Humidity:{weatherData.humidity} %</li>
							<li>Wind:{weatherData.wind} km/h</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		const apiKey = "3323f2e20324d1953472069851a88a5a";

		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return "Loading...";
	}
}
