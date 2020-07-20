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
      array:[]
    };
    this.handlerNextDogClick = this.handlerNextDogClick.bind(this);
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
  }


  componentDidMount() {
    this.setState({
      counter: 10,
      message: localStorage.getItem(Object.keys(localStorage)[0]),
      array: []

    })

    // this.fetchDog()

    // document.addEventListener('keydown', (e) => {
    //   if(e.keyCode === 13) {
    //     this.handlerNextDogClick()
    //   }
    // } )

  }


  fetchDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => this.setState({message: data.message}))
  }

  handlerNextDogClick() {
    this.fetchDog()
  }




  componentDidUpdate(){
    if(this.state.message) alert(this.state.message.split('/')[4])

    // localStorage.setItem('dog', this.state.message)
    // localStorage.setItem("dogURL", JSON.stringify(this.state.array));
  }

  handleOnChangeInput(event){
    this.setState({
      dogname: event.target.value
    })
  }


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


        <label htmlFor='dogName'>Nomeie o Dog:</label>
        <input name='dogName' onBlur={this.handleOnChangeInput} type='text'></input>
        <button onClick={localStorage.setItem(this.state.dogname, this.state.message)}>Salvar Dog</button>
        <p>{this.state.dogname}</p>
      </div>
    );
  }
}

export default App;