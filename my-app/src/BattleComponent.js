import React from 'react';
import Form from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


class BattleComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = props.state
        this.state.pokemon1 = ''
        this.state.pokemon2 = ''
    }

    render(){
        console.log(this.state)
        return (
            <Form>
                <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                    Pokemon 1:
                </Form.Label>
                <Form.Control as="select" className="mr-sm-2" id="pokemonOne" custom>
                {/* Map each name as an option */}
                {this.state.pokemonIDs.map(id => {
                    var index = id -1
                    return( <option value = {index}>{this.state.pokemonNames[index]}</option>)
                })}
                </Form.Control>
            </Form>
            
        )
    }
}
export default BattleComponent