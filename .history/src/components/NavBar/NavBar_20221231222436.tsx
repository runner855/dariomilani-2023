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
       <li>Home</li>
       <li>About</li>
       <li>Projects</li>
       <li>Contact</li>
        </ul>
      </div>
    </nav>
   );
}
 
