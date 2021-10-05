import React, { Component } from 'react'
import {Paper, TextField, Input} from '@mui/material';
import '../Header/Header.css';
export default class SearchBar extends Component {
    state ={
        searchTerm:'',
    }

    handleChange =(e)=>
        this.setState({searchTerm:e.target.value})

    handleSubmit = (e)=>{
        const {searchTerm} =this.state;
        const {onFormSubmit} =this.props;
        onFormSubmit(searchTerm);
        e.preventDefault();
    }
    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit}>
                    <Input fullWidth className="textfield" placeholder="Search..." onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
