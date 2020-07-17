import React from 'react';
import PropTypes from 'prop-types'; 
import Pictures from './Pictures';

const PicturesList = (props) => {
    return(
      <div>
        {props.children.map(e =>(
          <Pictures
          key={e.id}
          height={200}
          src={e.src}
          alt="Logo da Trybe"
          legenda="Lista feita na Trybe"
        />
        ) )}
      </div>
    )
}


            {/* <Pictures
              height={200}
              src="https://www.publicdomainpictures.net/pictures/270000/velka/interior-bedroom.jpg"
              alt="Logo da Trybe"
              legenda="Lista feita na Trybe"
            >
              Lista children na Trybe
            </Pictures> */}

// Pictures.propTypes = {
//   alt: PropTypes.string,
//   height: PropTypes.number, 
//   children: PropTypes.any.isRequired, 
//   }
export default PicturesList;

// Acrescente uma prop alt e garanta que ela seja uma string obrigatória;

// Acrescente uma prop height e garanta que ela seja um number, e adicione um valor default para ela de 400;

// Garanta que a prop children da imagem seja obrigatória;

// Crie um elemento PicturesList que receba, na prop children, uma array de Pictures e as renderize dentro de uma lista. Faça a checagem de tipos de children. Esse exercício é para rever um pouco o conteúdo de aulas passadas também! O elemento precisará ocupar a posição de Pictures no componente App.