import React from 'react'
import { NavBar } from "../NavBar/NavBar"
import "../Header/Header.css"
import { TechStackLogos } from '../../Utilities/utility';
const Dario = require( "../../images/dario-removedbg.png");

export const Header = () => {
  return ( 
    <>
    <NavBar/>
    <div className='HeaderContainer'>
      <div className='HeroContainer'>
        <img className='HeroImage' src={Dario} alt="profile_picture"/>
        <div className='Name'>Dario Milani</div>
        <div className='Role'>Front-End Developer</div>
        <div className='TechStackContainer'>
          {TechStackLogos.map((item,index) => {
            return(
              <ul>
                <li><item.TechLogo/></li>
              </ul>
            )
          })}

        </div>
      </div>
    </div>
    </>
   );
}
 

