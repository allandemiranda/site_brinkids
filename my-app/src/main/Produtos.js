import React, { Component } from 'react'
import Produto from './Produto'

class Produtos extends Component{
    render(){
        const divProdutos = {
            width: '100%',
            margin: '80px 0px 0px',
            padding: '0px',
            float: 'left',
            display: 'block',
            boxSizing: 'border-box'
        }
        return (
            <div style={divProdutos}>
                <Produto></Produto>
                <Produto></Produto>
            </div>
        )
    }
}

export default Produtos