import React, { Component } from 'react'
import './Botao.css'

class Botao extends Component{
    botaoCores = () => {
        this.setState({
            color: 'yellow'
        })
    }

    render(){ 
        const liStyle = {
            padding: '0px',
            margin: '0px',
            display: 'inline',
            float: 'left',
            position: 'relative',
            background: '#FFFFFF'
        }
        const pStyle = {
            color: '#000',
            borderColor: '#f27b81',
            paddingLeft: '10px',
            display: 'block',
            lineHeight: '65px',
            position: 'relative',
            marginTop: '-5px',
            borderTop: '5px solid #ebebeb',
            textDecoration: 'none',
            listStyle: 'none',
            borderTopColor: ''+this.props.cor+''
        }
        return(        
        <li style={liStyle}>
            <p style={pStyle} 
            onMouseOver={this.botaoCores}
            >
            HOME
            </p>
        </li>        
        )
    }
}

export default Botao