import React, { Component } from 'react'
import Slider from './main/Slider';
import './main/Slideshow.css';

const content = [
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
            <Slider autoplay={3000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize: '100% 100%'}}
                    >                        
                    </div>
                ))}
            </Slider>
        )
    }
}

export default Main