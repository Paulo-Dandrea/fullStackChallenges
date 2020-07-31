// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAcess from './components/StrictAcess';

class App extends Component {
  render() {
    const usersList = [10, 100, 300];

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
            <span>
              <Link to="/strictacess">Strict Acess</Link>
            </span>
            <Switch>
              <Route path="/users/:userId" component={Users} />
              <Route
                path="/users"
                render={(props) => (
                  <Users
                    {...props}
                    greetingMessage="Alô, pessoal"
                    usersList={usersList}
                  />
                )}
              />
              <Route path="/about" component={About} />
              {/* <Route path="/strictacess" component={StrictAcess} /> */}
              <Route
                path='/strictacess'
                render={(props) => (
                  <StrictAcess {...props} user="lucas" password="1234" />
                )}
              />

              <Route exact path="/" component={Home} />
            </Switch>
          </nav>
        </header>
      </BrowserRouter>
    );
  }
}

export default App;
