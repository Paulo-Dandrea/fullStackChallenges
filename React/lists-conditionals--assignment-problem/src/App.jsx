import React, { Component } from 'react';
import './App.css';

const Paragraph = (props) => {
  return(
    <div>
      <p>
        {props.textlength}
      </p>
    </div>
  )
}

const ValidationComponent = (props) => {
  let p = '';
  (props.textlength < 5) ? p = 'too short' : p = 'long enough';
  return(
    <div>
      <p>
        {p}
      </p>
    </div>
  )
}

const CharComponent = (props) => {
  let style = {
    display: 'inline-block', 
    padding: '16px', 
    textAlign: 'center',
    margin: '16px', 
    border: '1px solid black',
  };

  return (
    <div style={style} key={props.chave} onClick={props.click} >
      {props.letter}
      {/* {console.log(props.click.value)} */}
    </div>
  )
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'a',
    };

    // this.togglePersonsHandler.bind(this)
  }

  HandlerChangeInput(event){
    this.setState({
      text: event.target.value,
    })
  }

  deleteHandler = (idx) => {
    const txt = this.state.text.split('');
    txt.splice(idx, 1);
    const joinAgain = txt.join('');
    this.setState({
      text: joinAgain,
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" onChange={(event) => this.HandlerChangeInput(event)} value={this.state.text}/>
          <Paragraph textlength={this.state.text.length}/>
          <ValidationComponent textlength ={this.state.text.length}/>
          {/* {this.teste} */}
          {this.state.text.split("").map((t, index) => <CharComponent letter={t} chave={index} click={() => this.deleteHandler(index)} /> )}
          
        </div>

        <ol>
          {/* <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li> */}
          {/* <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li> */}
          <li>Create another component (={'>'} CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
