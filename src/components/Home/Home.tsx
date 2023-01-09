import React from 'react'
import "./Home.css"
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
      <div className='IntroContainer_header'>
        Hello I'm Dario Milani
      </div>
      <div className='IntroContainer_content'>
        Hi I'm Dario Milani I am a Front-End Developer based in Italy
      </div>
      
    </div>
    </>
   );
}
 

