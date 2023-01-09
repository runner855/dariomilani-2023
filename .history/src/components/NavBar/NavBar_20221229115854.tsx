import React from 'react'
import { NavElements } from '../../Utilities/utility';
import { NavLink } from 'react-router-dom';



export const NavBar = () => {
  return ( 
  <div className='NavBarContainer'>
    {NavElements.map((item,index) => {
      return(
        <div className='Nav' key={index}>
          <ul><NavLink to={item.to}><p>{item.navelement}</p></NavLink></ul>
          </div>
      )
    })}
  </div>
    
   );
}
 
