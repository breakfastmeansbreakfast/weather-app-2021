import "../styles/App.css";
import React from "react";
import PropTypes from "proptypes";

function ForecastSummary(props) {
  const { date, temperature, icon, description } = props;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__icon">{icon}</div>
      <div className="forecast-summary__description">{description}</div>
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