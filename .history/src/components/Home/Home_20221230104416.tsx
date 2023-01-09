import React from 'react'
import "../Home/Home.css";
import { Header } from "../Header/Header"

export const Home = () => {
  return ( 
    <div className='HomeContainer'>
      <Header/>
      <div className='IntroContainer'>
        <div className='IntroHeader'>Hello I'm Dario Milani</div>
        <div className='IntroContent'>I'm a Front-End Developer based in Italy.</div>
      </div>

    </div>
   );
}
 
