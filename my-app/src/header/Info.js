import React, { Component } from 'react'

class Info extends Component {
  render(props) {
    const divStyle = {
      float: 'right',        
      padding: '0px',
      textAlign: 'right',
      margin: '0px',
      lineHeight: '0px'
    }
    return (      
      <div style={divStyle}>
        <p>
          <p>{this.props.email} <i class="fas fa-envelope"></i></p>
        </p>
        <p>
          <p>{this.props.telefone} <i class="fas fa-phone"></i>  {this.props.whatsapp} <i class="fab fa-whatsapp"></i>  </p>
        </p>
      </div>      
    )
  }
}

export default Info