// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {

    const usersList = [10, 100, 300]

    return (
      <BrowserRouter>
        <header className="trybe-header">
          <nav className="trybe-nav">
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>
              <Link to="/about">About</Link>
            </span>
            <span>
              <Link to="/users">Users</Link>
            </span>
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/users/:userId' component={Users} />
            <Route 
              path='/users' 
              render={(props) => <Users {...props} greetingMessage='Alô, pessoal' usersList={usersList}/>}
            />

          {/* <Route path='/solutions/:solutionID' component={Solutions} />
          <Route
            path='/solutions'
            render={props => <Solutions {...props} diasGabaritos={diasGabaritos} />}
          /> */}
          </Switch>

          </nav>
        </header>
      </BrowserRouter>
    );
  }
}

export default App;

// substitua o componente Home por um Route que mapeia o caminho de URL "/" para Home.