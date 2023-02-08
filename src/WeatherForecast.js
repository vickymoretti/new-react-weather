import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="forecastDay">Thu</div>
					<WeatherIcon code="01d" size={500} />
					<div className="weatherForecast-temp">
						<span className="forecast-max">19°</span>
						<span className="forecast-min">10°</span>
					</div>
				</div>
			</div>
		</div>
	);
}
