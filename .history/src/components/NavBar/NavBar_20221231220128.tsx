import * as React from 'react';
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
  return ( 
    <nav>
      <div className='NavBarContainer'>
        <ul>
          <li><NavLink>Home</NavLink></li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
   );
}
 
