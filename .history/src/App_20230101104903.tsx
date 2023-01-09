import React from 'react';
import './App.css';
import { Footer } from "./components/Footer/Footer"
import { Header } from './components/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { NavBar } from "./components/NavBar/NavBar";

export const  App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <Footer /> 

    </div>
  );
}

