import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation'
import HomeComponent from './HomeComponent.js'
import PokeComponent from './PokeComponent.js'
import BattleComponent from './BattleComponent.js'

const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';
const IMAGE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const NATURE_API = 'https://pokeapi.co/api/v2/nature/'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      collection: [],
      groceryList: [],
      // [image]
		  pokemonImages: [],
      pokemonIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      //[name]
      pokemonNames: [],
      //[index = id -1 [...berries]] https://pokeapi.co/api/v2/berry-flavor/1
      pokemonBerries: []
      //Array([weak to], [weak to])
    }
  }

// Berry-Flavor - List of berries that have this flavor
//{"berry":{"name":"rowap","url":"https://pokeapi.co/api/v2/berry/64/"},"potency":10}
// natures -> likes_flavor.url -> fetch (url) -> berries [] -> berry.name
  /*
  1)Pull information from /pokemon page
  2)Pull images
  3)Pull flavros from /nature page & edit pokemonData
  */
  
  componentDidMount(){
     //Fulfilling a promise for each index/id
     Promise.all(this.state.pokemonIDs)
     .then(indexArray =>{
       //Associating names to id
       indexArray.forEach(index =>{
         fetch(`${POKEMON_API}${index}`)
         .then(response => response.json())
         .then(data =>{
           this.setState({pokemonNames: [...this.state.pokemonNames, data.name]})
         })
       })
       //TODO: Berries are returning 
       //initializing berries
       // natures -> likes_flavor.url -> fetch (url) -> berries [] -> berry.name
       indexArray.forEach(index =>{
        fetch(`${NATURE_API}${index}`)
        .then(response => response.json())
        .then(data =>{
          
          //If Pokemon likes no flavor, assign the state for it to be an empty array
          if (data.likes_flavor === null){
            this.setState({pokemonBerries: [...this.state.pokemonBerries, []]})
          }else{
            //extracting the URL
            var berryURL = data.likes_flavor.url
            //Getting the berry info
            fetch(`${berryURL}`)
            .then(response => response.json())
            .then(data =>{
                //API stores berries as an array []
                var berryArray = data.berries
                //Extracting just the berry names
                var berryNames = []
                for (var berry in berryArray){
                  berryNames.push(berryArray[berry].berry.name)
                }
                //Setting the berry array in this.state
                this.setState({pokemonBerries: [...this.state.pokemonBerries, berryNames]})
            })
          }

          
        })
      })
      //initializing images
       indexArray.forEach(index =>{
         fetch(`${IMAGE_API}${index}.png`)
         .then(response => response.blob())
         .then(data =>{
           var url = URL.createObjectURL(data)
           this.setState({pokemonImages: [...this.state.pokemonImages, url]})
         })
       })
     })
  }


  render (){
    return (
      <BrowserRouter>
      <div className = "App">
          <Navigation/>
          <Switch>
            <Route path = "/home" component = {HomeComponent}/>
            <Route path = "/viewall" component = {() => <PokeComponent state = {this.state}/>}/>
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
