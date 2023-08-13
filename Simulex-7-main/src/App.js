import React from 'react';
import './App.css';
import img1 from './1.png';

function App() {
  return (
    <>
    <div className="body1">
      <div className="top">
        <img src={img1} alt="Not-Found!" />
      </div>
      <div className="end">
        <button>Add</button>
        <button>SUB</button>
        <button>STA</button>
        <button>LDA</button>
        <button>MUL</button>
        <button>DIV</button>
      </div>
    </div>
    </>
  );
}

export default App;
