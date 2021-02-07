import "../styles/App.css";
import React from "react";
import PropTypes from "proptypes";

function LocationDetails(props) {
  const { city, country } = props;
  return (
    <div className="LocationDetails">
      <h1>{`${city}, ${country}`}</h1>
    </div>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
};

export default LocationDetails;
