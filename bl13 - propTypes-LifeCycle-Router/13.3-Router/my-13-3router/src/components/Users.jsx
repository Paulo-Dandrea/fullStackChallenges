import React from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {

  const { match, usersList, greetingMessage = 'Hi There' } = props;

  console.log(match)

    if (match.params.userId) return <div>Olá, Usuario numero: {match.params.userId} </div>

  return (
  <div>
    <h2> Users </h2>
    {usersList.map((user => (
      <div key={user}>
      <span>
        <Link to={`/users/${user}`}>
          {user}
        </Link>
        <p> {greetingMessage}. This is my awesome {user} component </p>
  </span>


    </div>
    )))}
  </div>
);
} 

export default Users;
