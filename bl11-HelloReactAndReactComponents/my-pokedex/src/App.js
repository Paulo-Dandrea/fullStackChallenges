import React from 'react';
import './App.css';
import pokemons from './data';
import PokemonConstructor from './PokemonConstructor';
import Pokedex from './pokedex';

function App() {
  return (
    <div className='App'>
      {/* {pokemons.map((poke) => (
        <PokemonConstructor user={poke} key={poke.id} />
      ))} */}
      <Pokedex />
      
    </div>
  );
}

export default App;
