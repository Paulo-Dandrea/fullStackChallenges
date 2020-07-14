import React, { Component } from 'react';
// import React from 'react';
import UserOutput from '../UserOutput/UserOutput';
// import { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Paulo' };
  }

  nameHandler = (event) => {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div>
          <input type='text' value={this.state.name} onChange={this.nameHandler}></input>     
          <UserOutput name={this.state.name} age={36} nacionalidade={'brasileira'}>Aqui rola </UserOutput>
      </div>
    );

}
}

export default UserInput;

// input type="text" value={this.state.value} onChange={this.handleChange}/