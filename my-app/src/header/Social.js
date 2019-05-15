import React, { Component } from 'react'
import './Botao.css'

class Social extends Component{
    render(){   
        const ulStyle = {
            float: 'right',
            margin: '0 7%',
            padding: '0px',
            position: 'relative',
            lineHeight: 'normal',
            display: 'block'
        }
        const liStyle = {
            padding: '0px',
            margin: '0px',
            display: 'inline',
            float: 'left',
            position: 'relative',
            background: '#FFFFFF'
        }
        return(
        <ul style={ulStyle}>        
            <li style={liStyle}>
                <p className='botao-facebook' ><a href="https://www.facebook.com/brinkidsonline/"><i className="fab fa-facebook"></i></a></p>
            </li>
            <li style={liStyle}>
                <p className='botao-instagram'><a href="https://www.facebook.com/brinkidsonline/"><i className="fab fa-instagram"></i></a></p>
            </li>
        </ul>
        )
    }
}

export default Social