import React from 'react';
import './Form.css';
import Input from './Input';
import Button from './Button';

//import api from '../utils/Api';

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={query:'ttt',number:2};
        this.onChangeQuery=this.onChangeQuery.bind(this);
        this.onChangeNumber=this.onChangeNumber.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChangeQuery(event){
        console.log('lll');
        this.setState({query: event.target.value});
    }
    onChangeNumber(event){
        this.setState({number: event.target.value});
    }
    onSubmit(event){
        event.preventDefault();
        console.log(this);

        this.props.onSubmit(this.state);
      }

    render(){
        return(
            <form className='form' onSubmit={this.onSubmit}>
                <div className='form__inputs'>
                    <Input name='query'  text="тема" value={this.state.query} onChange={this.onChangeQuery}/>
                    <Input name='howMuch' text="количество" value={this.state.number} onChange={this.onChangeNumber}/>
                </div>
                <Button text="Do it!" type="Submit"/>
            </form>
        )
    }
}