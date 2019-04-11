import React, { Component } from 'react'

class Produto extends Component{
    render(props){
        const divUm = {
            float: 'left',
            width: '23.5%',
            margin: '2% 1% 0% 0%'
        }
        const divDois = {
            textAlign: 'center'            
        }
        const spanUm = {
            border: '3px solid #FFFFFF',
            boxShadow: '0px 0px 0px 2px #FFFFFF',
            borderRadius: '100%'
        }
        const h4Um = {
            fontFamily: "'Bubblegum Sans', cursive",
            fontSize: '24px',
            padding: '0px',
            color: '#2f2f2f',
            boxSizing: 'border-box'
        }
        const pUm = {
            margin: '0px 0px 10px',
            padding: '0px',
            boxSizing: 'border-box'
        }
        return (
            <div style={divUm}>
                <div style={divDois}>
                    <div>
                        <span style={spanUm}>
                            <img src={this.props.urlImg} 
                                 alt='' 
                                 title=''
                                 style={{borderRadius: '100%'}}>
                            </img>                            
                        </span>
                        <h4 style={h4Um}>
                            {this.props.titulo}
                        </h4>
                        <p style={pUm}>
                            {this.props.descri}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Produto