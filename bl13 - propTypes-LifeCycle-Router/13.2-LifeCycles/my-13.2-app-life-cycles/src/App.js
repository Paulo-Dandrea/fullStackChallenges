// App.js
import React from 'react';
import CounterDisplay from './CounterDisplay';
import Image from './Image';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      // message: "",
    };
    this.handlerNextDogClick = this.handlerNextDogClick.bind(this);
  }


  componentDidMount() {
    this.setState({
      counter: 10,
    })

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => this.setState({message: data.message}))
  }

  handlerNextDogClick() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => this.setState({message: data.message}))
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.message && nextState.message.includes("terrier")) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <CounterDisplay value={this.state.counter} />
        <Image img={this.state.message}/>
        <button onClick={this.handlerNextDogClick}>Next Dog</button>
      </div>
    );
  }
}

export default App;