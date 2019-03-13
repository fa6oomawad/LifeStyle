import React,{Component} from 'react';
import './Explore.css';
class Explore extends Component {
    constructor(props){
        super(props);
        this.state={
            bestdata:[],
        }
        this.getDetails=this.getDetails.bind(this);
    }

componentDidUpdate(){
    this.getDetails();

}

getDetails(){
    const encodedURI=encodeURI(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${this.props.city_id}&entity_type=${this.props.entity_type}`);
  const config = { headers: {'user-key': '166937a2df6fbfecdfa8c7a0a8f2bb5a'} }; 
return fetch(encodedURI,config)
.then (data=>data.json())
.then (data=>
  {
   
console.log(data);
  })
}

render(){
    return (
        <div>
            <h1>best rated resturants </h1>
            <h2> in  ${this.props.selectedCity} </h2>
            <div className="bigBox">
            <div className="smallBox">

            </div>
            <div className="smallBox">

</div>
<div className="smallBox">

</div>
            </div>
        </div>
    );
}





}

export default Explore;