import React, { Component } from 'react'
import Barra from './header/Barra'
import Nav from './header/Nav'

class Header extends Component {
  render() {
    const styleDiv = {
      width: '100%',
      float: 'left',
      backgroundColor: '#fff'
    }
    return (
      <div style={styleDiv}>        
        <Barra></Barra>
        <Nav></Nav>
      </div>
    )
  }
}

export default Header