import React from 'react';
import './App.css';
import { Footer } from "./components/Footer/Footer"
import { Header } from './components/Header/Header';

export const  App = () => {
  return (
    <div className="App">
     <Footer/>
     <Routes>
      <Route path="/" element={<Header/>}/>
     </Routes>
    </div>
  );
}

