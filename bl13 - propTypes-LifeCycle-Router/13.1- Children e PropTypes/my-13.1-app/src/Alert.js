import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent } = props;
  const {title, content, timeSeconds} = props.children
  setTimeout(() => hideComponent(), (timeSeconds * 1000));
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>

    </div>
  )
}

alert.PropTypes = {
  hideComponent: PropTypes.func,
  contentTitle: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.object,
  children: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    timeSeconds: PropTypes.number
  })

}

export default Alert;




// 2 --
// refactor code to
// 1- works with any information
// 2- receives a children object that contains the title, content and Timeseconds that the modal will show
// 3- PropType to validate the shape of the object

