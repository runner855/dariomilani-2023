import React from 'react'
import { NavElements } from '../../constants/dictionary';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return ( 
    NavElements.map((item,index) => {
      return (
        <div className='NavBarContainer'>
         <ul>
          <NavLink to={item.to}>{item.navelement}</NavLink>
         </ul>
        </div>
      )
    })
    
   );
}
 
