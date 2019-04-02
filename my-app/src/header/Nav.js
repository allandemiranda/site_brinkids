import React, { Component } from 'react'
import Menu from './Menu'
import Social from './Social'

class Nav extends Component{
    render(){
        const divNav = {
            height: '70px',
            clear: 'both',
            width: '100%',
            display: 'block',
            float: 'left',
            position: 'relative',
            borderTop: '5px solid #ebebeb',
            background: '#FFFFFF',
            margin: '0 auto'
        }
        return(
        <nav style={divNav}>
            <Menu></Menu>
            <Social></Social>
        </nav>
        )
    }
}

export default Nav