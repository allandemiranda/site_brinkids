import React, { Component } from 'react'
import BotaoAprenda  from './BotaoAprenda'
import Slider from './Slider';

class BrinkidsArea extends Component{
    render(){
        const divUm = {
            backgroundPosition: '50% 35px',
            backgroundColor: '#008c99',
            float: 'left',
            clear: 'both',
            width: '100%',
            margin: '0px',
            padding: '3% 0% 3% 13%',
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
            width: '50%',
            boxSizing: 'border-box'
        }

        const h2Um = {
            color: '#FFFFFF',
            textTransform: 'capitalize',
            fontFamily: "'Bubblegum Sans', cursive",
            fontWeight: 'normal',
            fontSize: '30px',
            marginBottom: '25px',
            boxSizing: 'border-box'
        }

        const divQuatro = {
            float: 'left',
            width: '48.9%'
        }

        const divCinco = {
            border: '50px solid transparent',
            padding: '0px',
            borderImage: 'url("http://brinkidsonline.com.br/novosite/img/add_bg.png") 8% round'
        }

        const contentSlide = [
            {
                image: 'http://brinkidsonline.com.br/novosite/img/foto8.png'
            },
            {
                image: 'http://brinkidsonline.com.br/novosite/img/foto5.png'
            },
            {
                image: 'http://brinkidsonline.com.br/novosite/img/gal1.jpg'
            },
            {
                image: 'http://brinkidsonline.com.br/novosite/img/gal2.jpg'
            },
            {
                image: 'http://brinkidsonline.com.br/novosite/img/gal3.jpg'
            },
            {
                image: 'http://brinkidsonline.com.br/novosite/img/gal4.jpg'
            },
            {
                image: 'http://brinkidsonline.com.br/novosite/img/gal5.jpg'
            },
            {
                image: 'http://brinkidsonline.com.br/novosite/img/gal6.jpg'
            },
            {
                image: 'http://brinkidsonline.com.br/novosite/img/gal7.jpg'
            }
        ];

        return(
            <div id='areaBrinkidsDiv' style={divUm}>
                <div style={divDois}>
                    <div style={divTres} id={'conteiner-texto'}>
                        <h2 style={h2Um}>Aprenda Brincando</h2>
                        <div style={divQuatro}>
                            <BotaoAprenda txt='Criatividade' icon='fa fa-paint-brush'></BotaoAprenda>
                            <br></br>
                            <BotaoAprenda txt='Inclusão Social' icon='fa fa-universal-access'></BotaoAprenda>
                            <br></br>
                            <BotaoAprenda txt='Liberdade' icon='fa fa-bullseye'></BotaoAprenda>
                        </div>
                        <div style={divQuatro}>
                            <BotaoAprenda txt='Socialização' icon='fa fa-user-circle'></BotaoAprenda>
                            <br></br>
                            <BotaoAprenda txt='Aten. Personalizado' icon='fa fa-magic'></BotaoAprenda>
                            <br></br>
                            <BotaoAprenda txt='Acessibilidade' icon='fab fa-accessible-icon'></BotaoAprenda>
                        </div>
                    </div>
                    <div style={divTres} id={'conteiner-fotos'}>
                        <h2 style={h2Um}>Os Melhores Momentos estão na Brinkids!</h2>                                               
                        <div style={divCinco}>
                            <Slider autoplay={3000}>
                                {contentSlide.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize: '100% 100%'}}
                                    >                        
                                    </div>
                                ))}
                            </Slider>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default BrinkidsArea