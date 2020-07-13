import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import PokemonConstructor from './PokemonConstructor';

class Pokedex extends Component {
  render() {
    return pokemons
    .filter(e => (e.name === this.props.pokemonName))
    .map((poke) => (
      <PokemonConstructor user={poke} key={poke.id}  />
    ));
  }
}

export default Pokedex;

