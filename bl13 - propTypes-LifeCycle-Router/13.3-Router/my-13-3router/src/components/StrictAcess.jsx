import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const StrictAcess = (props) => {
  const { user, password } = props;

  if (user === 'joao' && password === '1234')
    return <div>Bem, vindo {user}</div>;

  return (
    <div>
      {alert('Apenas Joao pode entrar aqui, não ' + user)}
      <Redirect to="/" />
    </div>
  );
};

export default StrictAcess;
