import React from 'react';
import './App.css';
import { Footer } from "./components/Footer/Footer"
import { Home } from './components/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { NavBar } from "./components/NavBar/NavBar";
import { Projects } from './Projects/Projects';

export const  App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>

      <Footer /> 

    </div>
  );
}

