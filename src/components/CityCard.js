import React from 'react'
import cloudImage from '../assets/cloudImage.png';


function CityCard ({city}) {

    return(
        <div className='city-card flex justify-around border  border-1 items-center'>
            <figure>
                <img src={cloudImage} width="100px" />
            </figure>
            <ul className="weather-info flex flex-col">
                    <li>{city.name}</li>
                    <li>{city.lat}</li>
                    <li>{city.lon}</li>
            </ul>
        </div>
    )
}

export default CityCard
