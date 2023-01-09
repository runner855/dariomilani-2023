import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"

export const  App = () => {
  return (
    <div className="App">
     <Header/>
     <Footer/>
    </div>
  );
}

