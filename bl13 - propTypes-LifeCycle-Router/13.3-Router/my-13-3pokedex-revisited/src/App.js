import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './Data.jsx';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Details from './Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <span>
          <Link to="/">Pokedex</Link>
        </span>
        {/* <span><Link to='/solutions'>Gabaritos</Link></span> */}
        <Switch>
          <Route
            path="/" exact
            render={(props) => <Pokedex {...props} pokemons={pokemons} />}
          />
        </Switch>
        {/* // <Pokedex pokemons={pokemons}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

// <Route
// path='/solutions'
// render={props => <Solutions {...props} diasGabaritos={diasGabaritos} />}
// />
