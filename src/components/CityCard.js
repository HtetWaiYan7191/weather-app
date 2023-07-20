import React from 'react';
import { Link } from 'react-router-dom';
import cloudImage from '../assets/cloudImage.png';

function CityCard({ city }) {
  return (
    <Link to={{ pathname: `/details/${city.name}/${city.lat}/${city.lon}` }} className='link-wrapper'>
      <div className="city-card flex justify-between items-center">
        <figure>
          <img src={cloudImage} width="100px" />
        </figure>
        <ul className="weather-info flex flex-col">
          <li>{city.name}</li>
          <li>Lat : {city.lat}</li>
          <li>Lon : {city.lon}</li>
        </ul>
      </div>
    </Link>

  );
}

export default CityCard;
