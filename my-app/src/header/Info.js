import React, { Component } from 'react'

class Info extends Component {
  render(props) {
    return (
      <div className='Info'>
        <div className='Info-email'>
            <p>{this.props.email}</p>
            <i class="far fa-envelope"></i>
        </div>
        <div className='Info-telefones'>
            <p>{this.props.telefone}</p>
            <i class="fas fa-phone"></i>
            <p>{this.props.whatsapp}</p>
            <i class="fab fa-whatsapp"></i>
        </div>
      </div>
    );
  }
}

export default Info