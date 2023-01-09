import React from 'react';
import './App.css';
import { Footer } from "./components/Footer/Footer"
import { Header } from './components/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { NavBar } from '../.history/src/components/NavBar/NavBar_20221231224543';

export const  App = () => {
  return (
    <div className="App">
      <NavBar/>
     <Footer/>
     <Routes>
      <Route path="/" element={<Navigate to="/About"/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
    </div>
  );
}

