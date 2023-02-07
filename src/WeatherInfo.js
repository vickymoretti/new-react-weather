import React from "react";
import "./Weather.css";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1>{props.data.city} </h1>
			<ul>
				<li>
					<FormatDate date={props.data.date} />
				</li>
				<li className="text-capitalize">{props.data.description}</li>
			</ul>
			<div className="row mt-3">
				<div className="col-6">
					<div className="d-flex">
						<div className="float-left">
							<WeatherIcon code={props.data.icon} />
						</div>
						<div className="unit">{Math.round(props.data.temperature)}</div> °C
					</div>
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity:{props.data.humidity} %</li>
						<li>Wind:{props.data.wind} km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
