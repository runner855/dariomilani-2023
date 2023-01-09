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
              <a href={item.href} target="_blank" rel="noreferrer"><item.FooterIcon/></a>
              </li>
          </ul>
        )
      })}
      
  
    </div>
  );
}
 
