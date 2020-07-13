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
      selectedPokemon: pokemons[0].name,
    };
  }

  setNext = () => {
    this.setState((state) => {
      if (state.counter > pokemons.length - 2) {
        return { counter: 0, selectedPokemon: pokemons[0].name };
      } else {
        return {
          counter: state.counter + 1,
          selectedPokemon: pokemons[state.counter + 1].name,
        };
      }
    });
  };

  render() {
    return (
      <div className='App'>
        <button onClick={this.setNext}>Next!</button>
        <Pokedex pokemonName={this.state.selectedPokemon} />
      </div>
    );
  }
}

export default App;

// Altere a sua página para que, ao invés de exibir toda a lista de pokémons, ela exiba um pokémon por vez. Ao apertar um botão de Próximo pokémon, a página passa a exibir o próximo pokémon da lista, e depois o próximo, e assim sucessivamente. Ao se chegar ao último pokémon da lista, a pokedex deve voltar para o primeiro pokémon no apertar do botão. Dica: Lembre-se disso!
