import { Component } from 'react';
import React from 'react';
import Image from './Image';
// pokemons


class PokemonConstructor extends Component {
  render() {
    return (
      <div className = 'pokemonBox'>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.type} </p>
    <p> {this.props.user.averageWeight.value} {this.props.user.averageWeight.measurementUnit} </p>
        <Image source={this.props.user.image} alt="Pokemon" />
      </div>
    );
  }
}



export default PokemonConstructor