import React, { Component } from 'react'

class BotaoAprenda extends Component{
    render(props){        
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
            color: '#5c5c5c',
            borderRadius: '100%',
            padding: '5%',
            marginRight: '15px'
        }
        return(
            <div>
                <h4 style={h4Um}>
                    <i className={this.props.icon} style={iUm}></i>
                    {this.props.txt}                    
                </h4>
            </div>
        )
    }
}

export default BotaoAprenda