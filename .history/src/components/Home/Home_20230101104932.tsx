import React from 'react'
import "./Header.css"
const Dario = require( "../../images/dario-removedbg.png");

export const Home = () => {
  return ( 
    <>
    <div className='HomeContainer'>
      <div className='HeroContainer'>
        <img className='HeroImage' src={Dario} alt="profile_picture"/>
        <div className='Name'>Dario Milani</div>
        <div className='Role'>Front-End Developer</div>
       
    
      </div>
      
    </div>
    </>
   );
}
 

