import React, { Component } from 'react'
import './Header.css'
import Barra from './header/Barra'

class Header extends Component {
  render() {
    return (
      <div className='Header'>        
        <Barra></Barra>
      </div>
    );
  }
}

export default Header