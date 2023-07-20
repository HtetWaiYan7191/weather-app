import React from 'react'
import { NavLink } from 'react-router-dom'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-10 py-5 items-center border-b-2 bg-sky-600'>
        <div className=' logo-container'>
            <TiWeatherPartlySunny className='text-7xl text-white'/>
        </div>
        <form>
            <input placeholder='Search City' className=' outline-none border-b-2 border-b-white bg-inherit placeholder:text-white'/>
        </form>
        <ul className='flex'>
            <li className='me-3'><NavLink to="/">Home</NavLink></li>
            <li className='me-3'><Link to="/" target='blank'>City API</Link></li>
            <li className='me-3'><Link to="/" target='blank'>Weather API</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
