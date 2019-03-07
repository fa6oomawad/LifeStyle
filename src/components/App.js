import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    matchedLocation:[],
  }
  this.getAllCities=this.getAllCities.bind(this);

}
componentDidMount(){
this.getAllCities();
}
//to fetch all the cities first 
 getAllCities(){
const encodedURI=encodeURI(`https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`);
return fetch(encodedURI)
.then (data=>data.json())
.then (data=>
  {
   
    this.setState({matchedLocation:data});
  })

}
//to filter the cities to match what is typed on the search bar .
getLocation(e){
  console.log(e.target.value)
const regex=new RegExp(e.target.value,'gi');
let newlocations=this.state.matchedLocation.filter((item)=> {return item.city.match(regex) || item.state.match(regex)});
this.setState({matchedLocation:newlocations});

}



  render() {
    return (
      <div className="App">
       <div className="navbar"><img src='burger.jpg'   /></div>
<div className="mainDiv">
<p>Find The Perfect Restaurant </p>
<input className="searchBar" type="text" placeholder='Enter your location..' onChange={this.getLocation.bind(this)}/>

<ul className="searchSugg">
  <li>1</li>
  <li>2</li>
</ul>

  <button id="searchButton">Search</button>
  </div>
      </div>
    );
  }
}

export default App;
