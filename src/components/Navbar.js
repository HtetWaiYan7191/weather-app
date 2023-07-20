import React, { useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import '../styles/Navbar.css';

import { fetchSearchCity } from '../redux/city/citySlice';

const Navbar = () => {
  const [inputSearch, setInputSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputSearch}`);
    setInputSearch('');
  };
  return (
    <nav className="flex justify-between px-10 py-5 items-center border-b-2 bg-sky-600">
      <div className=" logo-container">
        <TiWeatherPartlySunny className="text-7xl text-white" />
      </div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search City" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} className=" outline-none border-b-2 border-b-white bg-inherit placeholder:text-white" />
      </form>
      <ul className="flex">
        <li className="me-3"><NavLink to="/">Home</NavLink></li>
        <li className="me-3"><Link to="/" target="blank">City API</Link></li>
        <li className="me-3"><Link to="/" target="blank">Weather API</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
