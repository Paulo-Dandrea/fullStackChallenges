import React, { Component } from 'react';

class Image extends Component  {

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.img && nextProps.img.includes("terrier")) {
      return false;
    }
    return true;
  }


  // const thereIsSource = props.img

  render () {
    if(this.props.img){
      console.log(this.props.img)
      return(
        <div>
        <img src={this.props.img} alt="" width='auto' height='300px'/>
        </div>
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }
  }
}

export default Image
