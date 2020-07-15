import React, { Component } from 'react';

class FormErrors extends Component {


  render() {
    const { formErrors } = this.props;
    
    return (
      <div>
        {Object.keys(formErrors).map((fieldName, i) => {
          // console.log(formErrors[fieldName])
          if (formErrors[fieldName].length === 0) return ''
          return <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        })}
      </div>
    )
  }
}

export default FormErrors; 