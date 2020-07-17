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

Pictures.propTypes = {
  children: PropTypes.array
  }
export default PicturesList;
