import React from 'react';
import PropTypes from 'prop-types'; 

const Pictures = (props) => {
    return(
      <div>
        <legend>{props.legend}</legend>
        <img height={props.height} src={props.src} alt={props.alt}/>
        {props.children}
      </div>
    )
}

Pictures.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 
  // children: PropTypes.any.isRequired, 
  }

export default Pictures;

// Acrescente uma prop alt e garanta que ela seja uma string obrigatória;

// Acrescente uma prop height e garanta que ela seja um number, e adicione um valor default para ela de 400;

// Garanta que a prop children da imagem seja obrigatória;

// Crie um elemento PicturesList que receba, na prop children, uma array de Pictures e as renderize dentro de uma lista. Faça a checagem de tipos de children. Esse exercício é para rever um pouco o conteúdo de aulas passadas também! O elemento precisará ocupar a posição de Pictures no componente App.