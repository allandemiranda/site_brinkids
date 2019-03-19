import React, { Component } from 'react'
import './Menu.css'
import BotaoMenu from './BotaoMenu'

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <BotaoMenu nome="HOME"></BotaoMenu>
        <BotaoMenu nome="TESTE"></BotaoMenu>
      </div>
    );
  }
}

export default Menu