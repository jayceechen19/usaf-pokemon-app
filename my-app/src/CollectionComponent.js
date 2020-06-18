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
            
        }
        return(
            <div>
                {this.collection.map(pokemon => <h4>{pokemon}</h4>)}
            </div>
        )
    }
}
export default CollectionComponent