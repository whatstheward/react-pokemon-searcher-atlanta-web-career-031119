import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const URL = 'http://localhost:3000/pokemon'
class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allPokemon: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(pokemon => {
      let newPokemon = pokemon.map(poke => {
      return {
        ...poke, flipped: false
      }
    })
      this.setState({allPokemon: newPokemon})
    })
  }

  toggleSprite = (pokemonData) =>{
    let clickedPokes = this.state.allPokemon.map(pokemon => {
      if(pokemon.id === pokemonData.id){
        pokemon.flipped = !pokemon.flipped
        return pokemon
      }else{
        return pokemon
      }
    }) 
    this.setState({allPokemon: clickedPokes}) 
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection toggleSprite={this.toggleSprite} allPokemon={this.state.allPokemon} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
