import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSearchCity } from '../redux/city/citySlice';
import cloudImage from '../assets/cloudImage.png';

const SearchPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.value);

  useEffect(() => {
    dispatch(fetchSearchCity(name));
  }, [dispatch]);

  return (
    <div className="city-container grid grid-cols-4">
      <div className="city-card flex justify-around border  border-1 items-center">
        <figure>
          <img src={cloudImage} width="100px" />
        </figure>
        {city.length > 0 && (
        <ul className="weather-info flex flex-col">
          <li>{city[0].name}</li>
          <li>{city[0].lat}</li>
          <li>{city[0].lon}</li>
        </ul>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
