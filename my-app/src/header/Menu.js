import React, { Component } from 'react'
import Botao from './Botao'

class Menu extends Component{
    render(){
        const botaoMenuDados =  [
            {
                id: 'botao-1',
                cor: 'botao-vermelho',
                txt: 'HOME'
            },
            {
                id: 'botao-2',
                cor: 'botao-laranja',
                txt: 'BRINKIDS'
            },
            {
                id: 'botao-3',
                cor: 'botao-verde',
                txt: 'PROTUDOS'
            },
            {
                id: 'botao-4',
                cor: 'botao-roza',
                txt: 'CONTATO'
            }
        ]

        const ulStyle = {
            float: 'left',
            margin: '0 7%',
            padding: '0px',
            position: 'relative',
            lineHeight: 'normal',
            display: 'block'
        }

        return(
        <ul style={ulStyle}>        
            {botaoMenuDados.map(dados => <Botao key={dados.id} cor={dados.cor} txt={dados.txt}></Botao>)}
        </ul>
        )
    }
}

export default Menu