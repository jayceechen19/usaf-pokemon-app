import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


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
					<Link to= {`/${this.state.pokemonData[index].name}` }>
							<Button variant = "light">
								<h3>{this.state.pokemonData[index].name}</h3>
								<img src = {this.state.pokemonData[index].image}/>
							</Button>
					</Link>
					)
				})}
			</div>
		);
	}
}
export default PokeComponent