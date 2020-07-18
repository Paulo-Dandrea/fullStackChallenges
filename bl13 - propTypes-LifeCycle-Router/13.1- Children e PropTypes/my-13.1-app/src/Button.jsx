import React from 'react';
import Proptypes from 'prop-types';

const Button = (props) => {
  const { showComponent, isDisable, content } = props;
  return (
    <button
      type="button"
      disabled={isDisable}
      onClick={() => showComponent()}
    >
      {content}
    </button>
  )
}

Button.propTypes = {
  showComponent: Proptypes.func,
  isDisable: Proptypes.bool,
  content: Proptypes.string
}


export default Button;