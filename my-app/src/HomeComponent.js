import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink, Link } from 'react-router-dom';
import Navigation from './Navigation'


class HomeComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div> 
                <h2>Search a pokemon</h2>
                <input type = "text"></input>{' '}
                <Button variant = 'primary' type = 'submit'>Search</Button>
            </div>
        )
    }
}
export default HomeComponent