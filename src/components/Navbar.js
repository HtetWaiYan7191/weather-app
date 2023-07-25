import React, { useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import '../styles/Navbar.css';

const Navbar = () => {
  const [inputSearch, setInputSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputSearch}`);
    setInputSearch('');
  };
  return (
    <nav className=" flex flex-row-reverse md:flex md:flex-row justify-between px-10 py-5 items-center border-b-2 bg-sky-600">
      <Link to="/" className=" logo-container">
        <TiWeatherPartlySunny className="text-7xl text-white" />
      </Link>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search City" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} className=" outline-none border-b-2 text-white border-b-white bg-inherit placeholder:text-white mb-3 md:mb-0" />
        <button type="submit" onClick={handleSubmit} className=" md:hidden block hover:bg-sky-700 text-white bg-sky-800 rounded-md py-1 px-3">Search</button>
      </form>
      <ul className="md:flex hidden">
        <li className="me-3"><NavLink to="/">Home</NavLink></li>
        <li className="me-3"><Link to="/" target="blank">City API</Link></li>
        <li className="me-3"><Link to="/" target="blank">Weather API</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
