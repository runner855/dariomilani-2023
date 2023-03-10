import * as React from 'react';
import { NavLink } from 'react-router-dom';
import "../NavBar/NavBar.css"


export const NavBar = () => {
  return ( 
    <nav>
      <div className='NavBarContainer'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
   );
}
 
