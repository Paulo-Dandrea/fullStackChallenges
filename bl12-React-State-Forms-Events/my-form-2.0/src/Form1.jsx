import React from 'react';
import { Component } from 'react';
import FormErrors from './FormErrors';





class Form1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      nome: '',
      CPF: '',
      address: '',
      city: '',
      formErrors: {city: '', address: '', CPF: '', email: '',
      password: '',
      nome: '' }
    }
  }


  changeHandler = event => {
    let { name, value } = event.target
    if(name === 'nome') {
      value = value.toUpperCase()
    }
    this.setState((state) => (
      {
        [name]: value, 
        formErrors: {
          ...state.formErrors,
          [name]: this.validateField(name, value)
        }
      }
    ))
  }


  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) 
        const isValid2 = (value.length <= 50)
        return (isValid && isValid2)? '' : ' está invalido'

      case 'password':
        return value.length >= 6 ? '' : ' é pequena demais'

      case 'nome':
        return value.length <= 40 ? '' : '  grande demais'
        
        case 'CPF':
        return value.length <= 11 ? '' : '  grande demais'

        case 'address':
        return value.length <= 200 ? '' : '  grande demais'
        
        // case 'city':
        // return value.charAt(1) !== Number ? '' : '  não pode começar com número'
        
      default:
        break;
    }
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.nome);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <fieldset>
        <form onSubmit={this.handleSubmit}>
          <div>
            Nome:
            <input
              type="nome"
              name="nome"
              value={this.state.nome} 
              onChange={this.changeHandler}
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            CPF:
            <input
              type="CPF"
              name="CPF"
              value={this.state.CPF} // ''
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email} // ''
              onChange={this.changeHandler}
              required
            />
          </div>

          <div>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandler}
              required
            />
          </div>

          <div>
            Endereço:
            <input
              type="address"
              name="address"
              value={this.state.address}
              onChange={this.changeHandler}
            />
          </div>

          {/* <div className="container">
              Estado:
              <select
                name="countryState"
                required
                value={this.state.countryState}
                onChange={this.changeHandler}
              >
                  {states.map((value, key) =>
                    <option key={key}>{value}</option>
                    )
                  }
              </select>
            </div> */}

          <input type="submit" value="Submit" />
        </form>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        </fieldset>
        
      </div>
    );
  }
}


export default Form1;



// Cidade - Texto

// Limite de 28 caracteres

// Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.

// Campo obrigatório.