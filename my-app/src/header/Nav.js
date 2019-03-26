import React, { Component } from 'react'
import Menu from './Menu'

class Nav extends Component{
    render(){
        const divNav = {
            clear: 'both',
            float: 'left',
            width: '100%',
            position: 'relative',
            borderTop: '5px solid #ebebeb',
            background: '#FFFFFF',
            height: '70px',            
            margin: '0 auto',
            boxSizing: 'border-box',
            padding: '0px',                        
            lineHeight: 'normal',
            display: 'block'
        }
        return(
        <nav style={divNav}>
            <Menu></Menu>
            <div ClassName='botao-direita'></div>
        </nav>
        )
    }
}

export default Nav