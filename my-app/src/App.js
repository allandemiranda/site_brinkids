import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Rodape from './Rodape'

class App extends Component {
  rolagem() {       
    window.scrollTo({behavior: 'smooth', top: 0})
  }  

  render() {
    const divTop = {
      border: 0,
      backgroundColor: '#7e00e4',
      color: '#fff',
      padding: '1rem',
      fontSize: '1rem',
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
      borderRadius: '60px'
    }

    return (
      <div>
        <link rel="stylesheet" 
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
          crossOrigin="anonymous"></link>
        <Header></Header>
        <Main></Main>
        <Rodape></Rodape>
        <p style={divTop} onClick={this.rolagem.bind(this)} ><i className="fas fa-angle-double-up"></i></p>
      </div>
    )
  }
}

export default App
