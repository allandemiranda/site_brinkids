import React, { Component } from 'react'
import './Botao.css'

class Botao extends Component {
    rolagem() {
        window.scrollTo({ behavior: 'smooth', top: this.props.rolarAte })
    }

    render(props) {
        const liStyle = {
            padding: '0px',
            margin: '0px',
            display: 'inline',
            float: 'left',
            position: 'relative',
            background: '#FFFFFF'
        }

        return (
            <li style={liStyle}>
                <p className={this.props.cor} onClick={this.rolagem.bind(this)}>{this.props.txt}</p>
            </li>
        )
    }
}

export default Botao
