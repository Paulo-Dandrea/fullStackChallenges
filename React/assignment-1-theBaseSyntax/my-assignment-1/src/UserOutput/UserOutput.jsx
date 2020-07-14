import React from 'react';
import './userOutput.css';

const UserOutput = (props) => {
    return ( 
      <div className='UserOutput'>
      <p>Hello, {props.name}.</p>
      <p>From the otherside.</p>
      <p>Prédio e bicicleta.</p>
      <p>{props.children}</p>
    </div>)
}

export default UserOutput;