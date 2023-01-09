import React from 'react'
import { NavElements } from '../../Utilities/utility';
import { NavLink } from 'react-router-dom';



export const NavBar = () => {
  return ( 
   { NavElements.map((item,index) => {
      return (
        <div className='NavBarContainer' key={index}>
         <ul>
          <NavLink to={item.to}>{item.navelement}</NavLink>
         </ul>
        </div>
      )
    })
  }
    
   );
}
 
