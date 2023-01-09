import React from 'react'
import { FooterElements } from '../../Utilities/utility';
import "../Footer/Footer.css"
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (  
    <div className='FooterContainer'>
      {FooterElements.map((item,index) => {
        return (
          <ul>
            <li>
              <NavLink to={item.href}><item.FooterIcon/></NavLink>
              </li>
          </ul>
        )
      })}
      
  
    </div>
  );
}
 
