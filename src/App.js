import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todos/>
      </header>
    </div>
  );
}

export default App;