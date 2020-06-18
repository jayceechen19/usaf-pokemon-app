import React from 'react';
import Button from 'react-bootstrap/Button';

//As a user, I want to be able to search for a specific Pokemon so that I can see all of the important/relevant information about them.

class Pokemon extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = props.state;
	  this.id = props.id
	  this.collect = props.collect;

	  this.SimilarTypes = this.SimilarTypes.bind(this)
	}

    //*Event Handler for Viewing Similar Types
    SimilarTypes(event){
		event.preventDefault();
		console.log(this.state.pokemonData[this.id - 1]['type']);
	}

	render() {
		return (
			<div>
				<h3>{this.state.pokemonData[this.id - 1].name}</h3>
				<img src = {this.state.pokemonData[this.id - 1].image}/>
					<h5>ID: {this.state.pokemonData[this.id-1]['id']} </h5>
					<h5>Type: {this.state.pokemonData[this.id -1]['type'].map(type => {return type + " "})}</h5>
					<h5>Attack: {this.state.pokemonData[this.id-1]['attackStat']}</h5>
					<h5>Moves: {this.state.pokemonData[this.id - 1]['moves'].map(move=>{return move + ' '})}</h5>
					<Button variant = "primary" type = "submit" onClick = {this.SimilarTypes}>View Similar Types</Button>
					<br></br>
					<Button variant = "warning" type = "submit" onClick = {this.collect(this.state.pokemonData[this.id - 1])}>Collect</Button>
			</div>
			
		);
	}
}
export default Pokemon