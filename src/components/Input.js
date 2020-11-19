import React from 'react';
import './Input.css';
//import api from '../utils/Api';

export default class Input extends React.Component{
    //constructor(props){
    //    super(props);
   // }

    componentDidMount(){

    }
    render(){
        return(
            <div className='field'>
                <p className='field__text'>{this.props.text}</p>
                <input className='field__input' value={this.props.value} onChange={this.props.onChange}/>
            </div>

        )
    }
}