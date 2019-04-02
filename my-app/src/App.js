import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <link rel="stylesheet" 
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
          crossOrigin="anonymous"></link>
        <Header></Header>
        <Main></Main>
      </div>
    )
  }
}

export default App
