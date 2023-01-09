import React from 'react';
import './App.css';
import { Footer } from "./components/Footer/Footer"
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

export const  App = () => {
  return (
    <div className="App">
      <Header/>
     <Footer/>
     <Routes>
      <Route path="/" element={<Header/>}/>
     </Routes>
    </div>
  );
}

