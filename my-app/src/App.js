import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Rodape from './Rodape'

class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" 
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
          crossOrigin="anonymous"></link>
        <Header></Header>
        <Main></Main>
        <Rodape></Rodape>
      </div>
    )
  }
}

export default App
