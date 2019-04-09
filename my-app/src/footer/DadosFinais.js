import React, { Component } from 'react'

class DadosFinais extends Component{
    render(props){
        const divUm = {
            clear: 'both',
            float: 'left',
            width: '100%',
            margin: '0px',
            padding: '15px 0px 10px',
            background: 'url(http://brinkidsonline.com.br/novosite/img/footer_strip.jpg) center top repeat-x #008c99'
        }

        const divDois = {
            width: '1170px',
            margin: '0 auto'
        }


        const pUm =  {
            margin: '0px',
            lineHeight: '35px',
            float: 'left',
            color: '#FFF',
            padding: '0px'
        }

        return(
            <div style={divUm}>
                <div style={divDois}>
                    <p style={pUm}>© 2017 Brinkids. All rights reserved. Design by {this.props.desenvolvedor}</p>
                </div>
            </div>
        )
    }
}

export default DadosFinais