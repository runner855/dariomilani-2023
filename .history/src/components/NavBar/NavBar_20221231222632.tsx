import  React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../NavBar/NavBar.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavElements } from '../../../.history/src/Utilities/utility_20221229231419';


export const NavBar = () => {
  return ( 
    <nav>
      <div className='LogoContainer'>
        Logo
      </div>
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
 
