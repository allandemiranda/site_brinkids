import React, { Component } from 'react'
import Slider from './main/Slider';
import './main/Slideshow.css';
import Produtos from './main/Produtos'
import BrinkidsArea from './main/BrinkidsArea'
import Contato from './main/Contato'

class Main extends Component{
    constructor() {
        super()
        this.state = ({ db: [] })
    }

    componentDidMount() {
        fetch("http://brinkidsonline.com.br/allan/admin/principal.php")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    db: responseJson
                })
                //console.log(this.state.db)
            })
    }

    render() {
        const contentSlide = this.state.db
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