import React, { Component } from 'react'

class Logo extends Component {
  render(props) {
    const imgStyle = {
      float: 'left'
    }
    return (
      <img style={imgStyle} src={this.props.src} alt='Logo BRINKIDS'></img>
    )
  }
}

export default Logo