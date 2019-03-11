import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    matchedLocation:[],
    selectedCity:'',
    longitude:'',
    latitude:''
  }
  this.getAllCities=this.getAllCities.bind(this);
  this.setChoice=this.setChoice.bind(this);

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
    console.log(this.state.matchedLocation)
  })

}
//function to take the selected city or country and put it on the search bar 
setChoice(e){
  var selectedCity=e.target.innerHTML;
var searchResult=document.getElementById('searchSugg');
let searchBar=document.getElementById('searchBar');
searchBar.value=selectedCity;
searchResult.style.display='none';
console.log(e.target.id)
//fetching the id that we already stored the long and lat for it , to save it on a state to use it on the other components
var longlat=e.target.id;
var array=longlat.split(',');
this.setState({
  longitude:array[0],
  latitude:array[1]
})

}


//to filter the cities to match what is typed on the search bar .
getLocation(e){
const regex=new RegExp(e.target.value,'gi');
let newlocations=this.state.matchedLocation.filter((item)=> {return item.city.match(regex) || item.state.match(regex)});
let loca= newlocations.map((item)=>{

  
  return `<li class='city' id='${item.longitude},${item.latitude}'>${item.city}, ${item.state} </li>`
 }).join('');

 

 var searchResult=document.getElementById('searchSugg');
 searchResult.innerHTML=loca;
searchResult.style.display='block';
 var allCities=document.querySelectorAll('.city');
 allCities.forEach((item)=>item.addEventListener('click',this.setChoice))
 
 if(e.target.value===''){
  searchResult.innerHTML='';
 }

};









  render() {
    return (
      <div className="App">
       <div className="navbar">  <img src='1.png'  alt="logo" />
</div>
<div className="mainDiv">
<p>Find The Perfect Restaurant </p>
<input id="searchBar" type="text" placeholder='Enter your location..' onChange={this.getLocation.bind(this)}/>

<ul id="searchSugg">
  
</ul>

  <button id="searchButton">Search</button>
  </div>
  
      </div>
    );
  }
}

export default App;
