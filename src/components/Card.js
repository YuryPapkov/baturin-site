import React from 'react';
import './Card.css';


export default class Card extends React.Component{
// constructor(props){
//     super(props);
    
    
// }
componentDidMount(){
    console.log(this.props.data);  
}
componentDidUpdate(){
    console.log(this.props.data);  
}

render(){
    if(this.props.data !== undefined){
   return (
       <div className="card">
          <img src={this.props.data.urls.small} className="card__photo" alt=''/>
          <p>{this.props.data.user.username}</p>
        </div>
       );
   }else{
     return null;
 }
 }
}