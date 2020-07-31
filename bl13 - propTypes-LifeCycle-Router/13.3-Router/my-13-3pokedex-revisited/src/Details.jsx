import React from 'react';

const Details = (props) => {
  const {name, type, averageWeight, image} = props.pokeUser;
  return (
    <div><p>{props}</p></div>
  );
}

export default Details;