import React, { Fragment, useCallback, useEffect, useState } from 'react'
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

  const navigateToSearch = useCallback(() => {
    if (searchTerm)
      navigate(`/search?query=${searchTerm}&page=1`);
  }, [navigate, searchTerm])

  const navigateToHome = () => {
    navigate('/');
  }

  const handleMobileMenu = () => {
    const mobileMenu = document.querySelectorAll('.mobile');
    mobileMenu[0].classList.toggle("menu-open");
  }

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        navigateToSearch();
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [navigateToSearch])

  return (
    <Fragment>
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
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            Tv Series
          </li>
          <li>
            About
          </li>
        </ul>
        <button className='hamburger-icon' onClick={handleMobileMenu}>
          <span className="material-symbols-outlined">
            menu
          </span>
        </button>
      </div>
      <div className='mobile'>
        <div className="mobile-menu">
          <ul className="menu">
            <li className="menu-item">
              <Link to='/'>Home</Link>
            </li>
            <li className="menu-item"><Link to='/movie'>Movie</Link>
            </li>
            <li className="menu-item"><Link to='/'>TV Series</Link>
            </li>
            <li className="menu-item"><Link to='/'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default NavBar
