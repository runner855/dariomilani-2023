import React from 'react'
import { FooterElements } from '../../Utilities/utility';
import "../Footer/Footer.css"
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (  
    <div className='FooterContainer'>
      {FooterElements.map((item,index) => {
        return (
          <ul>
            <li>
              <a href={item.href}><Link to={item.href}><item.FooterIcon/></Link></a>
              </li>
          </ul>
        )
      })}
      
  
    </div>
  );
}
 
