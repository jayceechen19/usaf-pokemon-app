import React from 'react';
//React Bootstrap that formats things nicely
import Button from 'react-bootstrap/Button';

class CollectionComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = props.state
    }
    render(){
        
        if (this.state.collection.length == 0){
            return(
            <div>
                <h1>Your collection is empty</h1>
            </div>
            )
            
        }else{
            console.log(this.state.collection)
            return(
                <div>
                    <h1>Your Collection: </h1>
                    {this.state.collection.map(pokemon => {
                        return (
                        <div>
                        <img src = {pokemon.image}/>
                        <h4>{pokemon.name}</h4>
                        </div>)
                        })}
                </div>
            )
        }
        
    }
}
export default CollectionComponent