import React, { Component } from 'react'

class Logo extends Component {
  render(props) {
    return (
      <img src={this.props.src} alt='Logo BRINKIDS'></img>
    );
  }
}

export default Logo