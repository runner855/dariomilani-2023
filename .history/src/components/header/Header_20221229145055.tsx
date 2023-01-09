import React from 'react'
import { NavBar } from "../NavBar/NavBar"
import "../Header/Header.css"
const Dario = require( "../../images/dario.jpg");

export const Header = () => {
  return ( 
    <>
    <NavBar/>
    <div className='HeaderContainer'>
      <div className='HeroContainer'>
        <img className='HeroImage' src={Dario} alt="profile_picture"/>
        <div className='Name'>Dario Milani</div>
        <div className='Role'>Front-End Developer</div>
      </div>
    </div>
    </>
   );
}
 

