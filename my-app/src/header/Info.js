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
        <div>
          <p>{this.props.email} <i className="fas fa-envelope"></i></p>
        </div>
        <div>
          <p>{this.props.telefone} <i className="fas fa-phone"></i>  {this.props.whatsapp} <i className="fab fa-whatsapp"></i>  </p>
        </div>
      </div>      
    )
  }
}

export default Info