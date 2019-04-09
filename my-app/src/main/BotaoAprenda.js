import React, { Component } from 'react'

class BotaoAprenda extends Component{
    render(){
        const divUm = {
            padding: '0px',
            position: 'relative',
            width: 'auto',
            display: 'inline-block',
            margin: '0px',
            clear: 'both',
            boxSizing: 'border-box'
        }

        const h4Um = {
            color: '#fff',
            margin: '0px',
            lineHeight: '40px',
            fontFamily: "'Bubblegum Sans', cursive",
            fontWeight: 'normal',
            fontSize: '20px',
            padding: '0px',
            boxSizing: 'border-box'
        }

        const iUm = {
            border: '3px solid #FFFFFF',
            backgroundColor: '#FFFFFF',
            color: '#5c5c5c'
        }
        return(
            <div style={divUm}>
                <h4 style={h4Um}>
                    Criatividade
                    <i className="fas fa-paint-brush" style={iUm}></i>
                </h4>
            </div>
        )
    }
}

export default BotaoAprenda