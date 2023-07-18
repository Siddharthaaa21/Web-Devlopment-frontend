import React, { Component } from 'react'; 
import logo from './logo.svg';

import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';



class App extends Component {
  render() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     
      <Greet/>
      {/* <Welcome/> */}
      <Welcome/>
    </div>
  );
}
}

export default App;
