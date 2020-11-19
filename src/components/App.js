import React from 'react';
import './App.css';
import Form from './Form';
import LoginForm from './LoginForm';
import Card from './Card';

import api from '../utils/Api';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      dataFromServer:[],
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  };
  handleSubmit=({query, number})=>{
    api.picturesDownload(query, number)
    .then ((res)=>{
       this.setState({dataFromServer:res.results});
       console.log(this.state.dataFromServer[0]);
       console.log(query, number);
})
     .catch((err)=>{
        console.log(err);
}) 
}
render(){
  return (
    <div className="App">
      <Form onSubmit={this.handleSubmit}/>
      <div className="cardsGrid">
        {this.state.dataFromServer.map(({id, ...item})=><Card key={id} data={item}/> )}
      </div>
      
    </div>
  );
}
}
export default App;
