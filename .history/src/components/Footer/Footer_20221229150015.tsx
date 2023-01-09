import React from 'react'
import { FooterElements } from '../../Utilities/utility';
import "../Footer/Footer.css"

export const Footer = () => {
  return (  
    <div className='FooterContainer'>
      {FooterElements.map((item,index) => {
        return (
          <ul>
            <li>
              <a href={item.href} target="_blank"><item.FooterIcon/></a>
              </li>
          </ul>
        )
      })}
      
  
    </div>
  );
}
 
