import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	function handleResponse(response) {
		console.log(response.data);
	}
	console.log(props);
	let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
	let latitude = props.coordinates.lat;
	let longitude = props.coordinates.lon;
	let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

	https: axios.get(apiURL).then(handleResponse);
	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="forecastDay">Thu</div>
					<WeatherIcon code="01d" size={34} />
					<div className="weatherForecast-temp">
						<span className="forecast-max">19°</span>
						<span className="forecast-min">10°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
