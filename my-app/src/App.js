//Functionality
import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import Navigation from './Navigation'
import HomeComponent from './HomeComponent.js'
import PokeComponent from './PokeComponent.js'
import BattleComponent from './BattleComponent.js'
import Pokemon from './Pokemon.js'

//APIs
const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      //*DESCRIPTION: An array that stores the indexes of all the pokemon the user adds to 'My Collection'
      //Array = [id1, id2, id3, ...]
      //todo: not initialized yet
      collection: [],

      //*DESCRIPTION: An array that stores the berries that we need for each pokemon
      //todo: not initialized yet, unsure depends on what is defined as food
      groceryList: [],

      //* DESCRIPTION: An array of pokemon IDs. We use this to help us pull data from the APIs
      //See below
      pokemonIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],

      //* DESCRIPTION: An array of pokemon Names
      pokemonNames: [],
      //*DESCRIPTION: An array of pokemon data.
      /*Array = [
          Object{ id = #, name = '', image = '', types = [], moves =[]}
      ]
      */
      pokemonData : []
    }
  }

  //*Once the component is created, initialize this.state
  componentDidMount(){
     //Fulfilling a promise for each index/id
     Promise.all(this.state.pokemonIDs)
     .then(indexArray =>{
       //*WORKING CODE
       //Associating names to id
       indexArray.forEach(index =>{
         fetch(`${POKEMON_API}${index}`)
         .then(response => response.json())
         .then(data =>{
          //Add to the pokemon names
          this.setState([...this.state.pokemonNames, data.name]) 
          //Getting all the images URLS
           var imageURL = data.sprites.front_default
           //Getting all the types
           var typeArray = []
           for(var index in data.types){
            typeArray.push(data.types[index].type.name)
          }
          //Gettng all the moves
           var moveArray = []
           for(var index in data.moves){
             moveArray.push(data.moves[index].move.name)
           }
           //Creating an object to store
           var newObj = {
             id: data.id,
             name: data.name,
             image: imageURL,
             type: typeArray,
             moves: moveArray
           }
           //Adding the object to the data
           this.setState((state) => ({pokemonData: [...state.pokemonData, newObj]}))
          })
       })
    })
  }


  render (){
    return (
      <BrowserRouter>
      <div className = "App">
          {/* Creates the navigation buttons */}
          <Navigation/>
          {/* Creates the routes/ sub-pages */}
          <Switch>
            <Route path = "/home" component = {HomeComponent}/>
            <Route path = "/viewall" component = {() => <PokeComponent state = {this.state}/>}/>
            {/* Create a route path for each pokemon, call on pokemon & pass in the pokemon */}
            {/* Map pokemon IDs, use the id to pull the correct index from pokemon/name */}
            {this.state.pokemonIDs.map(id => {
                  return <Route path = {`/${this.state.pokemonNames[id-1]}`} component = {() => 
                  <Pokemon state = {this.state} id = {id}/>}/>
            })}
            <Route path = "/mycollection" component = {PokeComponent}/>
            <Route path = "/battle" component = {() =><BattleComponent state = {this.state}/>}/>
            <Route path = "/groceries" component = {PokeComponent}/>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
