import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { fetchSearchCity } from '../redux/city/citySlice';
import cloudImage from '../assets/cloudImage.png';

const SearchPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.value);

  useEffect(() => {
    dispatch(fetchSearchCity(name));
  }, [dispatch]);
  if (city.length === 0) {
    return (
      <div className="loading"><AiOutlineLoading3Quarters className="loading-icon  text-white text-4xl" /></div>
    );
  }
  return (
    <div className="search-page w-[100%] h-[100vh] bg-sky-400 flex justify-center align-middle">
      <div className="city-container w-[70%] md:w-[50%] my-10 ">
        <Link to={{ pathname: `/details/${name}/${city[0].lat}/${city[0].lon}` }} className="link-wrapper">
          <div className="city-card  flex justify-between  bg-[#2f85c7ef] px-10 py-8 cursor-pointer border  border-1 items-center text-center">
            <figure>
              <img src={cloudImage} width="100px" alt="cloud" />
            </figure>
            {city.length > 0 && (
            <ul className="weather-info flex flex-col">
              <li className=" text-black">{name}</li>
              <li className=" text-black">
                Lat:
                {city[0].lat}
              </li>
              <li className=" text-black">
                Lon:
                {city[0].lon}
              </li>
            </ul>
            )}
          </div>
        </Link>
      </div>
    </div>

  );
};

export default SearchPage;
