import React from 'react';
import Button from 'react-bootstrap/Button';

//As a user, I want to be able to search for a specific Pokemon so that I can see all of the important/relevant information about them.

class Pokemon extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = props.state;
	  this.id = props.id
	}

    // //*Event Handler for Viewing Similar Types
    // SimilarTypes(event){
	// 	event.preventDefault()
	// 	console.log("test")
	// }

	render() {
	console.log(this.state)
		return (
			<div>
				<h3>{this.state.pokemonData[this.id - 1].name}</h3>
				<img src = {this.state.pokemonData[this.id - 1].image}/>
					<li>ID: {this.id - 1} </li>
					<li>Type: </li>
					<li>Hit Points: </li>
					<li>Attack: </li>
					<Button variant = "primary" type = "submit" onClick = {this.SimilarTypes}>View Similar Types</Button>
			</div>
			
		);
	}
}
export default Pokemon