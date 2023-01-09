import React from 'react';
import './App.css';
import { Footer } from "./components/Footer/Footer"
import { Home } from './components/Home/Home';

export const  App = () => {
  return (
    <div className="App">
     <Home/>
     <Footer/>
    </div>
  );
}

