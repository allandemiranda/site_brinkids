import React, { Component } from 'react'
// OLHAR https://www.npmjs.com/package/react-slideshow-image !!!
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'images/slide_2.jpg',
    'images/slide_3.jpg',
    'images/slide_4.jpg'
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
    <Slide {...properties}>
        <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span>Slide 1</span>
            </div>
        </div>
        <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>Slide 2</span>
            </div>
        </div>
        <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span>Slide 3</span>
            </div>
        </div>
    </Slide>
    )
}

class SlideShow extends Component{
    render(){
        return(
            {this.Slideshow}
        )
    }
}

export default SlideShow