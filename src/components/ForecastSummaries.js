/* eslint-disable react/forbid-prop-types */
import "../styles/App.css";
import React from "react";
import PropTypes from "proptypes";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

const ForecastSummaries = ({ forecasts }) => (
  <div className="forecast-summaries">
    {forecasts.map((forecast) => (
      <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature}
      />
    ))}
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.array.isRequired,
};

export default ForecastSummaries;
