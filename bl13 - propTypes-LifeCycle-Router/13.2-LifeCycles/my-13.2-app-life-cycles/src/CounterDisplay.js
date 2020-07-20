// CounterDisplay.js
import React from 'react';

class CounterDisplay extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {

    // console.log('shouldComponentUpdate');

    if (nextProps.value % 3 !== 0 && (nextProps.value >= 13 && nextProps.value <= 16) ) return false;
    return true;
  }

  render() {
    return <div> counter: {this.props.value}</div>;
  }
}

export default CounterDisplay;