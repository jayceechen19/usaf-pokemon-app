import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Pokemon from "./Pokemon.js";


class PokeComponent extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = props.state;
	}

	render() {
		return (
			<div>
				{this.state.pokemonIDs.map( (id)=>{
					var index = id - 1
					return (
					//Passes props.state and props.id to the next page
					<Link to= {`/${this.state.pokemonNames[index]}`} 
					onclick = {() => <Pokemon state = {this.state} id = {index}/>}>
							<Button variant = "light">
								<h3>{this.state.pokemonNames[index]}</h3>
								<img src = {this.state.pokemonImages[index]}/>
							</Button>
					</Link>
					)
				})}
			</div>
		);
	}
}
export default PokeComponent