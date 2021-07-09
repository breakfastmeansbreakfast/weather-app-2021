/* eslint-disable react/no-unused-prop-types */
import "../styles/App.css";
import React from "react";
import PropTypes from "proptypes";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind } = forecast;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date" data-testid="date-id">
        {new Date(date).toLocaleDateString("en-gb", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div
        className="forecast-details__temperature-max"
        data-testid="temperature-max-id"
      >
        {temperature.max}&deg;C
      </div>
      <div
        className="forecast-details__temperature-min"
        data-testid="temperature-min-id"
      >
        {temperature.min}&deg;C
      </div>
      <div className="forecast-details__wind-speed" data-testid="wind-speed-id">
        {wind.speed} mph
      </div>
      <div
        className="forecast-details__wind-direction"
        data-testid="wind-direction-id"
      >
        Wind direction: {wind.direction.toUpperCase()}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};
export default ForecastDetails;
