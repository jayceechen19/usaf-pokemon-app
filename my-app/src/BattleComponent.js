import React from 'react';
//React Bootstrap that formats things nicely
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


class BattleComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = props.state
        this.state.pokemon1 = ""
        this.state.pokemon2 = ""

        this.handleChangeOne = this.handleChangeOne.bind(this)
        this.handleChangeTwo = this.handleChangeTwo.bind(this)
    }
    //*Event Handler for selecting Pokemon 1
    handleChangeOne(event){
        event.preventDefault()
        var id = event.target.value
        this.state.pokemon1 = this.state.pokemonNames[id]

    }
    //*Event Handler for selecting Pokemon 2
    handleChangeTwo(event){
        event.preventDefault()
        var id = event.target.value
        this.state.pokemon2 = this.state.pokemonNames[id]
    }
    handleClick(event){
        event.preventDefault()
        //Todo: fetch and compare the pokemon type's damage relations
        //Fetch the type for pokemon 1
        
    }
    render(){
        return (
            <div>
                {/* Picking Pokemon 1 */}
                <label for = "pokemon_1">Choose a pokemon:</label>
                <select name = "pokemon_1" id = "pokemon_1" onChange = {this.handleChangeOne}>
                    <option value = '0'>Select Pokemon...</option>
                    {this.state.pokemonIDs.map((id) => {
                        return( <option value = {id}>{this.state.pokemonNames[id - 1]}</option>)
                    })}
                </select> 
                <br/>
                {/* Pickng Pokemon 2 */}
                <label for = "pokemon_2">Choose a second pokemon:</label>
                <select name = "pokemon_2" id = "pokemon_2" onChange = {this.handleChangeTwo} >
                    <option value = '0'>Select Pokemon...</option>
                    {this.state.pokemonIDs.map((id) => {
                        return( <option value = {id}>{this.state.pokemonNames[id - 1]}</option>)
                    })}
                </select>
                {/* Formatting the submit button to look pretty */}
                <br></br>
                <Button variant = "danger" type = "submit" onClick = {this.handleClick}>Battle!</Button>
                
            </div>     
            
        )
    }
}
export default BattleComponent