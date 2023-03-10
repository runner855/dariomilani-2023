import  React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../NavBar/NavBar.css"
import { GiHamburgerMenu } from 'react-icons/gi';


export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return ( 
  <nav className="navbar">
      <div className="container">
        <div className="logo">
          Logo
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


   
 
