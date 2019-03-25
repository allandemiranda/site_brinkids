import React, { Component } from 'react'
import './Barra.css'
import Logo from './Logo'
import Info from './Info'
import logoBrinkids from './img/logo.png'

class Barra extends Component {
  render() {
    return (
      <div className='Barra'>
        <Logo src={logoBrinkids}></Logo>
        <Info email='contato@brinkids.com.br' telefone='(84) 0000-0000' whatsapp='(84) 99115-1610'></Info>
      </div>
    );
  }
}

export default Barra