import  React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../NavBar/NavBar.css"
import { GiHamburgerMenu } from 'react-icons/gi';


export const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar)
  }
  return ( 
    <nav className="navbar">
    <div className="container">
      <div className="logo">
        logo
      </div>
      <div className='menu-icon' onClick={handleShowNavBar}>
        <GiHamburgerMenu/>
      </div>
      <div className={`nav-elements ${showNavBar && 'active'}`}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
          <a href="#contact">Contact</a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
   );
}
 
