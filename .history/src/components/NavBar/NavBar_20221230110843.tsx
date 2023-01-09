import React from 'react'
import { NavElements } from '../../Utilities/utility';
import { Link } from 'react-router-dom';
import "../NavBar/NavBar.css";



export const NavBar = () => {
  return ( 
  <div className='NavBarContainer'>
    {NavElements.map((item,index) => {
      return(
        <div className='Nav' key={index}>
          <ul>
            <li><Link to={item.to}>{item.navelement}</Link></li>
            </ul>
          </div>
      )
    })}
  </div>
    
   );
}
 
