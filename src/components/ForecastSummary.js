import "../styles/App.css";
import React from "react";
import PropTypes from "proptypes";
import WeatherIcon from "react-icons-weather";

function ForecastSummary(props) {
  const { date, temperature, icon, description } = props;
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date" data-testid="date-id">
        {new Date(date).toLocaleDateString("en-gb", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div
        className="forecast-summary__temperature"
        data-testid="temperature-id"
      >
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__icon" data-testid="icon-image-id">
        <WeatherIcon name="owm" iconId={icon} flip="horizontal" rotate="90" />
      </div>
      <div
        className="forecast-summary__description"
        data-testid="description-id"
      >
        {description}
      </div>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
