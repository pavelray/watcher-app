import React from 'react'
import NavBar from '../Navbar/NavBar';
import './Layout.scss';

const Layout = ({children, wide}) => {
  return (
    <div className='container'>
      <NavBar />
      <div className={`${wide? '' : 'wrapper'}`}>
        {children}
      </div>
    </div>
  )
}

export default Layout
