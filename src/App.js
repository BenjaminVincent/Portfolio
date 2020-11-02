import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Skills from './components/Skills'

const App = () => {
  return (
    // className='app'
      <div className='temp'>
        <Navbar />
        <Landing />
        <Skills />
      </div>
  );
}

export default App;
