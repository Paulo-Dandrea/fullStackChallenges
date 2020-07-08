import React from 'react';
import logo from './logo.svg';
import './App.css';

// const task = (value) => {
//   return <li>{value}</li>;
// };

const list = [
  'react native 2021',
  'não entrar em discussões por nada',
  'music is your belonging with people 2021',
  'make a baby',
];

function App() {
  return (
    <ul>
      {
      list.map((tarefa) => (
        <li>{tarefa}</li>
      ))
      }
    </ul>
  );
}

export default App;
