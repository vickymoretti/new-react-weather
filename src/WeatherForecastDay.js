import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
	return (
		<div className="WeatherForecastDay">
			<div className="forecastDay">{props.data.dt} </div>
			<WeatherIcon code={props.data.weather[0].icon} size={34} />
			<div className="weatherForecast-temp">
				<span className="forecast-max">{props.data.temp.max} °</span>
				<span className="forecast-min">{props.data.temp.min} °</span>
			</div>
		</div>
	);
}
