import React from 'react'
import { NavElements } from '../../Utilities/utility';
import { Link } from 'react-router-dom';
import "../NavBar/NavBar.css";



export const NavBar = () => {
  return ( 
  <div className='NavBarContainer'>
<ul>
  <li>
    Home
  </li>
  <li>
    About
  </li>
  <li>
    Projects
  </li>
  <li>
    Contact
  </li>
</ul>
  </div>
    
   );
}
 
