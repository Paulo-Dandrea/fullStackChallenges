import React from 'react';
import './App.css';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Components/Home';
import  Login  from './Components/Login';
import Cadastro  from './Components/Cadastro';
import Lista from './Components/Lista';

function App() {
  return (
    <div className="App">

        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cadastro">Cadastre-se</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
          <Switch>
            {/* <Route exact path="/lista" component={Home} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/lista" component={Lista} />

            <Route exact path="/" component={Home} exact />
          </Switch>

        </BrowserRouter>
    </div>
  );
}

export default App;
