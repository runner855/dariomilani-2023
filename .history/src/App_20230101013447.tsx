import React from 'react';
import './App.css';
import { Footer } from "./components/Footer/Footer"
import { Header } from './components/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';

export const  App = () => {
  return (
    <div className="App">
      <Header/>
     <Footer/>
     <Routes>
      <Route path="/" element={<Navigate to="/About"/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
    </div>
  );
}

