import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}. Are you {this.props.age} years old?</h1>;
  }
}

export default Greeting;