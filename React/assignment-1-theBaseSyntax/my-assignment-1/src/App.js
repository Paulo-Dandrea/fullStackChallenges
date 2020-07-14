import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import ActionLink from './actionLink';
import Toggle from './Toggle';
// import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { name: 'Paulo' };
  //   }

  // nameHandler = (event) => {
  //   this.setState({name: event.target.value})
  // }

  render() {
    return (
      <div className='App'>
          <UserInput />
          <ActionLink />
          <Toggle />
          {/* <input type='text' onChange={this.nameHandler}></input>      */}
          {/* <UserOutput name={this.state.name} /> */}

        alo
      </div>
    );
  }
}

export default App;
