import React from 'react'
import './Navbar.scss';
import {
  Link
} from "react-router-dom";
import logo from '../../../images/icons/theaters.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img alt='logo' src={logo} />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          Movies
        </li>
        <li>
          Tv Series
        </li>
        <li>
          About
        </li>
      </ul>
    </div>
  )
}

export default NavBar
