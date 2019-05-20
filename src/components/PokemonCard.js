import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  render() {
    const pokemonHP = this.props.pokemonData.stats.filter(stat => stat.name === 'hp')[0].value
    return (
      <Card>
        <div onClick={()=>{this.props.toggleSprite(this.props.pokemonData)}}>
          <div className="image">
          { this.props.pokemonData.flipped ? 
          <img src={this.props.pokemonData.sprites.back} alt="oh no!" /> 
          :
           <img src={this.props.pokemonData.sprites.front} alt="oh no!" />}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonData.name}</div>
          </div>
          <div className="extra content">
          {this.props.pokemonData.flipped ? 
          <div>
            <ul>
              <li>{this.props.pokemonData.stats[0].name} : {this.props.pokemonData.stats[0].value}</li>
              <li>{this.props.pokemonData.stats[1].name} : {this.props.pokemonData.stats[1].value}</li>
              <li>{this.props.pokemonData.stats[2].name} : {this.props.pokemonData.stats[2].value}</li>
              <li>{this.props.pokemonData.stats[3].name} : {this.props.pokemonData.stats[3].value}</li>
              <li>{this.props.pokemonData.stats[4].name} : {this.props.pokemonData.stats[4].value}</li>
            </ul>
          </div> :
            <span>
              <i className="icon heartbeat red" />
                {pokemonHP} hp
            </span>}
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
