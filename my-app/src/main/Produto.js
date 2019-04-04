import React, { Component } from 'react'

class Produto extends Component{
    render(){
        const divUm = {
            float: 'left',
            margin: '0px 0px 0px 0px',
            width: '23.5%'
        }
        const divDois = {
            textAlign: 'center',
            width: '100%',
            margin: '0px',
            padding: '0px',
            clear: 'both',
            display: 'block',
            boxSizing: 'border-box'
        }
        const divTres = {
            display: 'inline-block',
            width: '118px',
            height: '118px',
            marginBottom: '25px',
            borderRadius: '100%',
            transition: 'background 0.2s ease-in-out'
        }
        const spanUm = {
            border: '3px solid #FFFFFF',
            boxShadow: '0px 0px 0px 2px #FFFFFF',
            borderRadius: '100%',
            position: 'relative',
            maxWidth: '118px',
            maxHeight: '118px',
            display: 'inline-block',
            backgroundRepeat: 'no-repeat',
            marginBottom: '20px',
            transition: 'all 0.5s linear 0s'
        }
        const h4Um = {
            fontFamily: "'Bubblegum Sans', cursive",
            fontWeight: 'normal',
            marginBottom: '20px',
            fontSize: '20px',
            margin: '0px',
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
                    <div style={divTres}>
                        <span style={spanUm}>
                            <img src='http://brinkidsonline.com.br/novosite/img/passaporte.png' 
                                 alt='' 
                                 title=''>
                            </img>
                            <h4 style={h4Um}>
                                Passaporte
                            </h4>
                            <p style={pUm}>
                                Não se preocupe com o tempo, brinque livremente. 
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Produto