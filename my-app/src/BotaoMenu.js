import React, { Component } from 'react'
import './BotaoMenu.css'

class BotaoMenu extends Component {
  //var cores = this.props.cor
  //const coresDef = { color: #f27b81 }


  render() {
    return (
      <div className='BotaoMenu'>
        <a>{this.props.nome}</a>
      </div>
    );
  }
}

export default BotaoMenu