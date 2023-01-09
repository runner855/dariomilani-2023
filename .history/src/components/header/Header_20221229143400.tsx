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
        <img className='HeroImage' src={Dario}/>
      </div>
    </div>
    </>
   );
}
 

