import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.props.allPokemon.map(pokemon=> <PokemonCard toggleSprite={this.props.toggleSprite} pokemonData={pokemon}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
