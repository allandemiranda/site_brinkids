import React, { Component } from 'react'
import Logo from './Logo'
import Info from './Info'
import logoBrinkids from './img/logo.png'

class Barra extends Component {
  render() {
    const divStyle = {
      width: '1170px',
      margin: '0 auto', 
      boxSizing: 'border-box',
      color: '#008c99'
    }
    return (
      <div style={divStyle}>
        <Logo src={logoBrinkids}></Logo>
        <Info email='contato@brinkidsonline.com.br' telefone='84 32068293' whatsapp='84 998510113'></Info>
      </div>
    )
  }
}

export default Barra