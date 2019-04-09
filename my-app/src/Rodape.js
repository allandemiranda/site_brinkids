import React, { Component } from 'react'
import DadosFinais from './footer/DadosFinais'

class Rodape extends Component{
    render(){
        return(
            <div>
                <DadosFinais desenvolvedor={'ALLAN DE MIRANDA'}></DadosFinais>
            </div>
        )
    }
}

export default Rodape