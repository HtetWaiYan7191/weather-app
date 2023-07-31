import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cloudImage from '../assets/cloudImage.png';

function CityCard({ city }) {
  return (
    <Link to={{ pathname: `/details/${city.name}/${city.lat}/${city.lon}` }} className="link-wrapper">
      <div className="city-card flex justify-between items-center cursor-pointer">
        <figure>
          <img src={cloudImage} className="md:w-[100px]  w-[65px]" alt="cloud" />
        </figure>
        <ul className="weather-info flex flex-col">
          <li>{city.name}</li>
          <li>
            Lat :
            {city.lat}
          </li>
          <li>
            Lon :
            {city.lon}
          </li>
        </ul>
      </div>
    </Link>

  );
}

CityCard.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
  }).isRequired,
};
export default CityCard;
