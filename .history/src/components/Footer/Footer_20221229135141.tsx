import React from 'react'
import { FooterElements } from '../../Utilities/utility';
import "../Footer/Footer.css"

export const Footer = () => {
  return (  
    <div className='FooterContainer'>
      {FooterElements.map((item,index) => {
        return (
          <ul>
            <li><item.FooterIcon/></li>
          </ul>
        )
      })}
      
  
    </div>
  );
}
 
