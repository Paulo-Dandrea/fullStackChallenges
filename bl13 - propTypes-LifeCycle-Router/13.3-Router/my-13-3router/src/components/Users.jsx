// arquivo Users.js
import React from 'react';

const Users = ({ greetingMessage = 'Hi There' }) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}. This is my awesome Users component </p>
  </div>
);

export default Users;