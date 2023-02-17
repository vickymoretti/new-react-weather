import React from "react";
import "./Weather.css";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h2>{props.data.city} </h2>
			<ul>
				<li>
					<FormatDate date={props.data.date} />
				</li>
				<li className="text-capitalize">{props.data.description}</li>
			</ul>
			<div className="row mt-3 columns">
				<div className="col-6">
					<div className="d-flex">
						<div className="float-left">
							<WeatherIcon code={props.data.icon} size={64} />
						</div>
						<WeatherTemperature celsius={props.data.temperature} />
					</div>
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity: {props.data.humidity} %</li>
						<li>Wind: {props.data.wind} km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
