import React, { Component } from 'react'
import Slider from './main/Slider';
import './main/Slideshow.css';
import Produtos from './main/Produtos'
import BrinkidsArea from './main/BrinkidsArea'
import Contato from './main/Contato'

const contentSlide = [
	{
		image: 'http://brinkidsonline.com.br/novosite/img/slide1.png'
	},
	{
		image: 'http://brinkidsonline.com.br/novosite/img/slide2.png'
	},
	{
		image: 'http://brinkidsonline.com.br/novosite/img/slide3.png'
	}
];

class Main extends Component{
    render() {
        return (
            <main>
                <Slider autoplay={3000}>
                    {contentSlide.map((item, index) => (
                        <div
                            key={index}
                            style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize: '100% 100%'}}
                        >                        
                        </div>
                    ))}
                </Slider>
                <Produtos></Produtos>
                <BrinkidsArea></BrinkidsArea>
                <Contato></Contato>
            </main>
        )
    }
}

export default Main