import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		console.log(forecast);
		return (
			<div className="WeatherForecast">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 5) {
							return (
								<div className="col" key={index}>
									<WeatherForecastDay data={dailyForecast} />
								</div>
							);
						}
					})}{" "}
					else {}
				</div>
			</div>
		);
	} else {
		let apiKey = "894a2e7aa7f46eeca5d8778f6faa5a5b";
		let latitude = props.coordinates.lat;
		let longitude = props.coordinates.lon;
		let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

		axios.get(apiURL).then(handleResponse);

		return null;
	}
}
