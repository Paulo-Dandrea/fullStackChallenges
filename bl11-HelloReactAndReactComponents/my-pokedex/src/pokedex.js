import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import PokemonConstructor from './PokemonConstructor';

class Pokedex extends Component {
  render() {
    return pokemons.map((poke) => (
      <PokemonConstructor user={poke} key={poke.id}  />
    ));
  }
}

export default Pokedex;

