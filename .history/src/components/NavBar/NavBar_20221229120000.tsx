import React from 'react'
import { NavElements } from '../../Utilities/utility';
import { NavLink } from 'react-router-dom';



export const NavBar = () => {
  return ( 
  <div className='NavBarContainer'>
    {NavElements.map((item,index) => {
      return(
        <div className='Nav' key={index}>
          <ul><NavLink to={item.to}>{item.navelement}</NavLink></ul>
          </div>
      )
    })}
  </div>
    
   );
}
 
