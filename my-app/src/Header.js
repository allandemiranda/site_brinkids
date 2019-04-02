import React, { Component } from 'react'
import Barra from './header/Barra'
import Nav from './header/Nav'

class Header extends Component {
  render() {
    const styleDiv = {
      width: '100%',
      float: 'left',
      margin: '0px',
      padding: '0px',
      backgroundColor: '#fff',
      display: 'block'
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