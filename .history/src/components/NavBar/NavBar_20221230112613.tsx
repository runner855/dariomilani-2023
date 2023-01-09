import React from 'react'
import { NavElements } from '../../Utilities/utility';
import { Link } from 'react-router-dom';
import "../NavBar/NavBar.css";



export const NavBar = () => {
  return ( 
  <div className='NavBarContainer'>
{NavElements && NavElements.map((item,index) => {
  return (
    <p><item.navelement/></p>
  )
})}
  </div>
    
   );
}
 
