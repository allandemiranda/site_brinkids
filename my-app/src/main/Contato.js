import React, { Component } from 'react'

class Contato extends Component{
    render(){
        const divUm = {
            width: '100%',
            margin: '0px',
            padding: '65px 0px 0px',
            float: 'left',
            clear: 'both',
            backgroundImage: 'url(http://brinkidsonline.com.br/novosite/img/footer_bg.png)',
            backgroundColor: '#FFFFFF',
            position: 'relative',
            backgroundPosition: 'center top',
            display: 'block'
        }

        const divDois = {
            padding: '0px 0px 25px 0px',
            width: '100%',
            clear: 'both',
            float: 'left'
        }

        const divTres = {
            width: '1170px',
            margin: '0 auto'
        }

        const divQuatro = {
            float: 'left',
            width: '32%'
        }

        const asideUm = {
            float: 'left',
            width: '100%',
            padding: '0px 0px 20px 0px',
            margin: '0px 0px 0px'
        }

        const h3Um =  {
            background: 'url(http://brinkidsonline.com.br/novosite/img/steelblue_sketch.png) left bottom no-repeat',
            padding: '0px 0px 25px 0px',
            fontSize: '22px',
            textTransform: 'capitalize',
            fontFamily: "'Bubblegum Sans', cursive",
            fontWeight: 'normal',
            color: '#2f2f2f'
        }

        const iUm = {
            color: '#008c99'
        }

        return(
            <div style={divUm}>
                <div style={divDois}>
                    <div style={divTres}>
                        <div style={divQuatro}>
                            <aside style={asideUm}>
                                <h3 style={h3Um}>Onde Estamos</h3>
                                <div>
                                    <i style={iUm} className="fa fa-map-marker"></i>
                                    <i> Natal Shopping - Piso 2/L2</i>
                                </div>
                            </aside>
                        </div>                        
                        <div style={divQuatro}>
                            <aside style={asideUm}>
                                <h3 style={h3Um}>Entre em Contato!</h3>
                                <div>
                                    <i style={iUm} className="fas fa-envelope"></i>
                                    <i> contato@brinkidsonline.com.br</i>
                                </div>
                                <div>
                                    <i style={iUm} className="fas fa-phone"></i>
                                    <i> 84 3206-8293</i> 
                                </div>
                                <div>
                                    <i style={iUm} className="fab fa-whatsapp"></i>
                                    <i> 84 99851-0113</i> 
                                </div>
                            </aside>
                        </div>
                        <div style={divQuatro}>
                            <aside style={asideUm}>
                                <h3 style={h3Um}>Horário de Funcionamento</h3>
                                <div>
                                    <i style={iUm} className="far fa-clock"></i>
                                    <i> De Segunda a Sábado das 10h às 22h.</i> 
                                </div>
                                <div>
                                    <i style={iUm} className="far fa-clock"></i>
                                    <i> Domingo e feriados das 11h às 22h.</i>  
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contato