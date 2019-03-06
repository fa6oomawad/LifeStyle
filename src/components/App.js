import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
}

 getLocation(){
const encodedURI=encodeURI(`https://developers.zomato.com/api/v2.1/locations?query=sudan`);
return fetch(encodedURI,{ headers: {'user-key': '166937a2df6fbfecdfa8c7a0a8f2bb5a'} }
)
.then (data=>data.json())
.then (d=>console.log(d.location_suggestions))

}



  render() {
    return (
      <div className="App">
       <div className="navbar"><img src='burger.jpg'   /></div>
<div className="mainDiv">
<p>Find The Perfect Restaurant </p>
<input className="searchBar" type="text" placeholder='Enter your location..' onChange={this.getLocation.bind(this)}/>
  <button id="searchButton">Search</button>
  </div>
      </div>
    );
  }
}

export default App;
