import React, { useState } from 'react'
import './Navbar.scss';
import {
  Link, useNavigate
} from "react-router-dom";


const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  }

  const navigateToSearch = () => {
    if(searchTerm)
      navigate(`/search?query=${searchTerm}`);
  }

  const navigateToHome = () => {
    navigate('/');
  }

  return (
    <div className='navbar'>
      <div className='brand-logo'>
        <span className="material-symbols-outlined">
          movie
        </span>
      </div>
      <div className='brand' onClick={navigateToHome}>
        <span>Moviezine</span>
      </div>
      <div className='search-wrapper'>
        <input type="text" value={searchTerm} onChange={handleChange} className='search-wrapper__input' placeholder='Search any movie, tv-series or people' />
        <button className='search-wrapper__button' onClick={navigateToSearch}>
          <span className="material-symbols-outlined">
            search
          </span>
        </button>
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
