import React, { Component } from 'react';
import Button from './Button';
import Alert from './Alert';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      isDisableButton: false,
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
      title: "Obj Algum títwwwwulo",
      content: "Obj Algum conteúdo", timeSeconds: 3 
    }

  content = [
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
          
      </div>
    )
  }
}

export default App;

//O código abaixo é um protótipo de modal. Crie a checagem de tipo para todas as props dos componentes. Crie um app react com o create-react-app e adicione o código abaixo para começar.