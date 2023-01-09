import React from 'react'
import { NavBar } from "../NavBar/NavBar"
import "../Header/Header.css"

export const Header = () => {
  return ( 
    <>
    <NavBar/>
    <div className='HeaderContainer'>
      <div className='HeroContainer'>
        <img className='HeroImage' src="../images/dario.jpg"/>
      </div>
    </div>
    </>
   );
}
 

