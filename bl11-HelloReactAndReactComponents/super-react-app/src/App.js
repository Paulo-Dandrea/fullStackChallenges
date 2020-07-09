import React, { Component } from 'react';
import './App.css';
import Greeting from './Greetings/greeting';
import Image from './Image/Image';
import Order from './Order/Order';
import UserProfile from './UserProfile';

class App extends Component {
  render() {
    const users = [
      {
        id: 102,
        name: 'João',
        email: 'joao@gmail.com',
        avatar:
          'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png',
      },
      {
        id: 77,
        name: 'Amélia',
        email: 'amelia@gmail.com',
        avatar:
          'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png',
      },
    ];

    const list = [
      'react native 2021',
      'não entrar em discussões por nada',
      'music is your belonging with people 2021',
      'make a baby',
    ];

    const headphone = {
      id: 102,
      user: 'cena@gmail.com',
      product: 'Razer Headphone',
      price: {
        value: 99.99,
        currency: 'dollars',
      },
    };

    const energyDrink = {
      id: 77,
      user: 'cena@gmail.com',
      product: 'Monster 500mL',
      price: {
        value: 9.99,
        currency: 'dollars',
      },
    };

    return (
      <div>
        <h1> Orders recently created </h1>
        <Order order={headphone} />
        <Order order={energyDrink} />

        <Greeting name='Paulo. React Master' age='36' />
        <Greeting name='Larissa, Kindness Master' age='25' />
        <Image
          source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
          alternativeText='Cute cat staring'
        />
        <ul>
          {list.map((tarefa, index) => (
            <li key = {index}>{tarefa}</li>
          ))} 
        </ul>


          {users.map((user, index) => (
            <UserProfile key={user.id} user={user} />
          ))}

      </div>
    );
  }
}

// usando CreateElement do react

// React.createElement('li', {className: 'App-link'}, tarefa)

export default App;
