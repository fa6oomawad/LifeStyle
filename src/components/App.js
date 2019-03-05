import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="navbar"><img src='burger.jpg'   /></div>
<div className="mainDiv">
<p>Find The Perfect Restaurant </p>
<input className="searchBar" type="text" placeholder='Enter your location..'/>
  <button id="searchButton">Search</button>
  </div>
      </div>
    );
  }
}

export default App;
