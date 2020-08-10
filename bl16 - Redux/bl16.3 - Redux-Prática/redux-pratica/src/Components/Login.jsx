import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

   this.state = {
     email: '',
     senha: '',
     autorizado: false
   }
  }

  logar = () => {
   const acharUser = this.props.usuarios.find(e => e.email === this.state.email)
   if(acharUser) {
    if(acharUser.senha === this.state.senha) {
      this.setState({autorizado: true})
    }
   }   
  }

  renderAutorizadoOuNão() {
    if (!this.state.autorizado) return <div>Login não efetuado!</div>;
    return <div><Link to='/lista'>lista dos cadastrados</Link></div>
  }

  render() {
    return (
    <div>
      <input type='email'
       onChange={(event) => this.setState({ email: event.target.value })}
        placeholder='e-mail'/>
      <input type='password' 
      onChange={(event) => this.setState({ senha: event.target.value })}
      placeholder='password'/>
      <button type='button' onClick={() => this.logar()}>Login</button>
      {/* <p>{this.state.email}</p> */}
      <p>{this.state.autorizado}</p>
      {this.renderAutorizadoOuNão()}
    </div>
  
    )
  }
}

const mapStatetoProps = state => ( {usuarios: state.reduceCadastrados })

// const mapDispatchToProps = dispatch => {
//   }
// }
export default connect(mapStatetoProps)(Login);