// Step 1: Import useState from React:
import React, { useState } from 'react'

// Step 2-1: Define App function:
function App() {
  // Step 2-2: Step-2Invoke imported useState function, which returns variables: counter and changeCounter:
  let [ counter, changeCounter ] = useState(1)
  // Step 4: Make changeCounter a global variable so it can be invoked in dev tools:
  window.changeCounter = changeCounter
  // Step 3: Use JSX to interpolate JavaScript variable, counter, into the page:
  return (
    <div>
      <h1>{ counter }</h1>
      <h4>{ counter }</h4>
    </div>
  )
}

// Export:
export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
