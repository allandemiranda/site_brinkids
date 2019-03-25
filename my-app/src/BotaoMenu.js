import React, { Component } from 'react'
import './BotaoMenu.css'

class BotaoMenu extends Component {
<<<<<<< HEAD
  render(props) {
    return (
      <div className="current_page_item  menu-item-simple-parent menu-item-depth-0 red">
        
=======
  //var cores = this.props.cor
  //const coresDef = { color: #f27b81 }


  render() {
    return (
      <div className='BotaoMenu'>
        <a>{this.props.nome}</a>
>>>>>>> 5256f3dfce3747fffc875a76525d70e319071170
      </div>
    );
  }
}

export default BotaoMenu