import React, { Component } from 'react';
import Button from './Button';
import Alert from './Alert';
import Dropdown from './Dropdown';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      isDisableButton: false,
      content: [
        {id: 1, item: 'O Estrangeiro'},
      ]
    }
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  changeShowComponent = () => {
    this.setState((state) => (
      {
        showModal: !state.showModal,
        isDisableButton: !state.isDisableButton
      }
    ))
  }

  obj = {
      title: "Obj Algum wulo",
      content: "Obj Algum conteúdo", timeSeconds: 3 
    }


  changeDropdown = (book) => {
    this.state.content.length > 1 
    ?    this.setState(() => (
      {
        content: [book]
      }
    ))

    :    this.setState((state) => (
      {
        content: this.contentao
      }
    ))
  } 

  contentao = [
    {id: 1, item: 'O Estrangeiro'},
    {id: 2, item: 'Black Swan'},
    {id: 3, item: 'Nudge'},
    {id: 4, item: 'Thinking Fast and Slow'},
  ];
  
  render() {
    return (
      <div className='main'>
        <Button content="Clique aqui" isDisable={this.state.isDisableButton} showComponent={this.changeShowComponent} value='Título Show' />
        {this.state.showModal &&
          <Alert
            hideComponent={this.changeShowComponent}
            contentTitle="Modal"
            content="Coloque qualquer coisa aqui."
        >{this.obj}</Alert>}
        <Dropdown click={this.changeDropdown.bind(this)}>
          {this.state.content}
        </Dropdown>
          
      </div>
    )
  }
}

export default App;

