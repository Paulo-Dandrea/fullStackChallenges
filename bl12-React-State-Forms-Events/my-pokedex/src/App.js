import React from 'react';
import './App.css';
import Pokedex from './pokedex';
import pokemons from './data';

class App extends React.Component {
  //
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      selectedPokemon: pokemons[0],
      tipo: 'Fire',
    };
  }

  setNext = () => {
    this.setState((state) => {
      if (state.counter > pokemons.length - 2) {
        return { counter: 0, selectedPokemon: pokemons[0]};
      } else {
        return {
          counter: state.counter + 1,
          selectedPokemon: pokemons[state.counter + 1],
          type: 'Fire'
        };
      }
    });
  };

  setType = (type) => {
    this.setState(state => {
      return {tipo: type}
    })
  }

 pokemonTypes = pokemons.reduce((types, {type}) => [...types, type], []);


  render() {
    return (
      <div className='App'>
        <button onClick={this.setNext}>Next!</button>
        <button onClick={() => this.setType('Fire')}>Fire!</button>
        <button onClick={() => this.setType('Psychic')}>Psychic!</button>
        <button onClick={() => this.setType('Normal')}>Normal!</button>
        <button onClick={() => this.setType('Dragon')}>Dragon!</button>
        <button onClick={() => this.setType('Poison')}>Poison!</button>
        <button onClick={() => this.setType('Bug')}>Bug!</button>
        <button onClick={() => this.setType('All')}>All!</button>

        <Pokedex pokemon={this.state} />
      </div>
    );
  }
}

export default App;




// {pokemonTypes.map(type => (
//   <Button
//     key={type}
//     onClick={() => this.filterPokemons(type)}
//     className="filter-button">
//     {type}
//   </Button>
// ))}

//  return [...new Set(pokemons.reduce((types, {type}) => [...types, type], []))];