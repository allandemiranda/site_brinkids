import React, { Component } from 'react'
import Slider from './main/Slider';
import './main/Slideshow.css';
import Produtos from './main/Produtos'

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
            </main>
        )
    }
}

export default Main