import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './index.css'
import Analytics from './components/Analytics';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
    </div>
  );
}

export default App;
