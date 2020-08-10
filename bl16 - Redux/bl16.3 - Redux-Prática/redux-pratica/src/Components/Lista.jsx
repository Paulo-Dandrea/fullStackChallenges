import React from 'react';
import { connect } from 'react-redux';


export const Lista = (props) => (
  <div>
    <h3>Cadastrados:</h3>
    {props.usuarios.map(user => (
      <div>
        <p>Nome:{user.nome}</p>
        <p>Email:{user.email}</p>
        <p>Banda Favorita:{user.banda}</p>
      </div>
    ))}
  </div>
)

const mapStatetoProps = state => (

    {
      usuarios: state.reduceCadastrados
    }

  )


export default connect(mapStatetoProps)(Lista);