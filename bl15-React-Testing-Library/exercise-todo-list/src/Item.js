import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content } = props
  return (
    <div className="Item" onClick={props.click}>
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
