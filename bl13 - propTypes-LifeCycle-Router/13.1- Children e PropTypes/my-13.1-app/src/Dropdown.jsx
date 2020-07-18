import React from 'react';
import './Alert.css';

const Dropdown = (props) => {

  return (
    <div className='Dropdown'>
      {/* <h1>{title}</h1> */}
      {props.children.map(e => (
        <p 
        key={e.id}
        className='DropdownList'
        onClick={() => props.click(e)}
        >{e.item}</p>
      ))}
      {/* <p>{props.content}</p> */}

    </div>
  )
}

export default Dropdown;