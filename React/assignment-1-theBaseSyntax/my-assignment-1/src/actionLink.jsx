import React from 'react';

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('O link foi clicado.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Clique Aqui
    </a>
  );
}

export default ActionLink ;