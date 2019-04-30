import React, { Component } from 'react'
import DadosFinais from './footer/DadosFinais'

class Rodape extends Component{
    render(){
        return(
            <div id='rodapeFinal'>
                <DadosFinais desenvolvedor={'ALLAN DE MIRANDA and CHIANC LEOCADIO'}></DadosFinais>
            </div>
        )
    }
}

export default Rodape