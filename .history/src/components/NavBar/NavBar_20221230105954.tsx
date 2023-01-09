import React from 'react'
import { NavElements } from '../../Utilities/utility';
import { NavLink } from 'react-router-dom';
import "../NavBar/NavBar.css";



export const NavBar = () => {
  return ( 
  <div className='NavBarContainer'>
    {NavElements.map((item,index) => {
      return(
        <div className='Nav' key={index}>
          <ul>
            <li>
              <NavLink to={item.to}><item.navelement/></NavLink>
              </li>
            </ul>
          </div>
      )
    })}
  </div>
    
   );
}
 
