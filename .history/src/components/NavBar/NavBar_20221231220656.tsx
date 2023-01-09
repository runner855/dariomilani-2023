import * as React from 'react';
import { NavLink } from 'react-router-dom';
import "../NavBar/NavBar.css"


export const NavBar = () => {
  return ( 
  <nav className="navbar">
      <div className="container">
        <div className="logo">
          Logo
        </div>
        <div className="nav-elements">
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


   
 
