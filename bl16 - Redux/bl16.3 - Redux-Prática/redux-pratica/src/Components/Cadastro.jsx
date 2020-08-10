import React, { Component } from 'react';
import addUser from '../actions/actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      banda: '',
      senha: '',
    };
  }

  render() {
    return (
      <div>
        <h3>Cadastre-se:</h3>
        <fieldset>
          <input
            type="text"
            onChange={(event) => this.setState({ nome: event.target.value })}
            placeholder="Nome"
          />
          <input
            type="email"
            onChange={(event) => this.setState({ email: event.target.value })}
            placeholder="e-mail"
          />
          <input
            type="text"
            onChange={(event) => this.setState({ banda: event.target.value })}
            placeholder="banda favorita"
          />
          <input
            type="password"
            onChange={(event) => this.setState({ senha: event.target.value })}
            placeholder="senha"
          />
          <button type="button" onClick={() => {
            this.props.addUsuario(this.state)
            console.log(this.state)}
          }
            >Foi</button>
        </fieldset>
        <p>{this.state.nome}</p>
        {/* <Link to='/lista'>lista</Link> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUsuario: user => dispatch(addUser(user))
  }
  
}

export default connect(null, mapDispatchToProps)(Cadastro);
