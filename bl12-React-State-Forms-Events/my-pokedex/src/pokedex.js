import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import PokemonConstructor from './PokemonConstructor';

class Pokedex extends Component {
  render() {
    // destructur the object for the second assignment?
    const { tipo, counter } = this.props.pokemon;

    const filteredPoke = pokemons
    .filter(({type}) => (type === tipo || tipo === 'All'))
    // .filter(e => e.name === selectedPokemon.name )
    .map((poke) => (
      <PokemonConstructor user={poke} key={poke.id}  />
    ));

    return filteredPoke[counter];
  }
}

export default Pokedex;

// colors.filter(({ color }) => [color, 'all'].includes(filter))