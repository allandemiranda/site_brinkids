import React, { Component } from 'react'
import './Menu.css'
import BotaoMenu from './BotaoMenu'

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <BotaoMenu></BotaoMenu>
      </div>
    );
  }
}

export default Menu