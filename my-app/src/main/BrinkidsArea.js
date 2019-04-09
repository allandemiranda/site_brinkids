import React, { Component } from 'react'
import BotaoAprenda  from './BotaoAprenda'

class BrinkidsArea extends Component{
    render(){
        const divUm = {
            backgroundPosition: '50% 35px',
            backgroundColor: '#008c99',
            float: 'left',
            clear: 'both',
            width: '100%',
            margin: '0px',
            padding: '78px 0px',
            backgroundImage: 'url(http://brinkidsonline.com.br/novosite/img/cloud-bg.png)',
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed',
            display: 'block',
            boxSizing: 'border-box'
        }

        const divDois = {
            width: '88%',
            boxSizing: 'border-box'
        }

        const divTres = {
            marginLeft: '0px',
            float: 'left',
            width: '48.9%',
            boxSizing: 'border-box'
        }

        const h2Um = {
            color: '#FFFFFF',
            textTransform: 'capitalize',
            fontFamily: "'Bubblegum Sans', cursive",
            fontWeight: 'normal',
            fontSize: '30px',
            marginBottom: '25px',
            margin: '0px',
            padding: '0px',
            boxSizing: 'border-box'
        }

        const divQuatro = {
            marginLeft: '0px',
            float: 'left',
            width: '48.9%'
        }

        const divCinco = {
            float: 'left',
            width: '48.9%'
        }

        const divSeis = {
            backgroundImage: 'url(http://brinkidsonline.com.br/novosite/img/add_bg.png)',
            padding: '8% 9% 0px 8.8%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }

        return(
            <div style={divUm}>
                <div style={divDois}>
                    <div style={divTres} id={'conteiner-texto'}>
                        <h2 style={h2Um}>Aprenda Brincando</h2>
                        <div style={divQuatro}>
                            <BotaoAprenda></BotaoAprenda>
                            <br></br>
                            <BotaoAprenda></BotaoAprenda>
                        </div>
                        <div style={divCinco}>
                            <BotaoAprenda></BotaoAprenda>
                            <br></br>
                            <BotaoAprenda></BotaoAprenda>
                        </div>
                    </div>
                    <div style={divTres} id={'conteiner-fotos'}>
                        <h2 style={h2Um}>Os Melhores Momentos estão na Brinkids!</h2>
                        <div style={divSeis}>
                            <div style={{maxWidth: '100%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrinkidsArea