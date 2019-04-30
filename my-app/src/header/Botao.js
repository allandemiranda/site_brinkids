import React, { Component } from 'react'
import './Botao.css'

class Botao extends Component{    
    rolagem(props) {
        // IMPLEMENTAR ROLAGEM AQUI
        //window.location.href=props.rolarAte
        console.log(props.rolarAte)
    }  
    
    render(props){ 
        const liStyle = {
            padding: '0px',
            margin: '0px',
            display: 'inline',
            float: 'left',
            position: 'relative',
            background: '#FFFFFF'
        }
        
        return(        
        <li style={liStyle}>
            <p className={this.props.cor} onClick={this.rolagem}>{this.props.txt}</p>
        </li>        
        )
    }
}

export default Botao