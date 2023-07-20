import React from 'react';
import citiesData from '../redux/citiesData';
import CityCard from './CityCard';
import '../styles/Home.css';

function Home () {



  return (
    <div className='city-container grid grid-cols-3'>
        {citiesData.map((city) => <CityCard key={city.name} city={city}/>)}
    </div>
  )
}
export default Home;
