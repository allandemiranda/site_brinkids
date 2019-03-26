import React, { Component } from 'react'
import Botao from './Botao'

class Menu extends Component{
    render(){
        const ulStyle = {
            margin: '0px',
            padding: '0px',
            listStyle: 'none'
        }
        return(
        <ul style={ulStyle}>
            <Botao cor='red'></Botao>
            <Botao cor='green'></Botao>
        </ul>
        )
    }
}

export default Menu