import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setcount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => setcount(count + 1)}>
          Edit <code>src/App.js</code> and save1 to reload2.
        </p>
        count:{count}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React5
        </a>
      </header>
    </div>
  );
}

export default App;
