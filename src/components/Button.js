import React from 'react';
import './Button.css';
//import api from '../utils/Api';

export default class Button extends React.Component{
    // constructor(props){
    //     super(props);
    // }
   

    componentDidMount(){

    }
    render(){
        return(
            <button className='button' type='submit' onClick = {this.props.onClick}>{this.props.text}</button>
        )
    }
}