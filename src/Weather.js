import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		setWeatherData({
			ready: true,
			coord: response.data.coord,
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			city: response.data.name,
			humidity: response.data.main.humidity,
			description: response.data.weather[0].description,
			date: new Date(response.data.dt * 1000),
			icon: response.data.weather[0].icon,
		});
	}

	function search() {
		const apiKey = "3323f2e20324d1953472069851a88a5a";

		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();

		search();
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-9">
							<input
								type="search"
								placeholder="Search city.."
								className="form-control"
								onChange={handleCityChange}
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
				<WeatherInfo data={weatherData} />
				<WeatherForecast coordinates={weatherData.coord} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
