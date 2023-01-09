import React from 'react'
import { NavElements } from '../../Utilities/utility';
import { Link } from 'react-router-dom';
import "../NavBar/NavBar.css";



export const NavBar = () => {
<nav>
  <div className='NavBarContainer'>
    <ul>
      {NavElements && NavElements.map((item,index) => {
        return (
          <li><Link to={item.to}>{item.navelement}</Link></li>
        )
      })}
    </ul>
  </div>
</nav>
}
 
