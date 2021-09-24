import React from 'react';
import './App.css';
import { HeaderBar } from './components/HeaderBar';
import { FooterBar } from './components/FooterBar';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <p>haha</p>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
