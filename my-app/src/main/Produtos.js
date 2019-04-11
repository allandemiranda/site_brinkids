import React, { Component } from 'react'
import Produto from './Produto'

class Produtos extends Component{
    render(){
        const listaDeProdutos = [
            {
                id: 'produto-1',
                titulo: 'Passaporte',
                descri: 'Não se preocupe com o tempo, brinque livremente.',
                urlImg: 'http://brinkidsonline.com.br/novosite/img/passaporte.png'
            },
            {
                id: 'produto-2',
                titulo: 'Pacote de Aniversário',
                descri: 'Festas com até 55 convites. Solicite seu orçamento.',
                urlImg: 'http://brinkidsonline.com.br/novosite/img/aniversario.png'
            },
            {
                id: 'produto-3',
                titulo: 'Programa Fidelidade',
                descri: 'Acumule pontos e ganhe diversão em dobro.',
                urlImg: 'http://brinkidsonline.com.br/novosite/img/cartaofidelidade.png'
            },
            {
                id: 'produto-4',
                titulo: 'Colônia de Férias',
                descri: 'As férias da criançada nunca foram tão incríveis.',
                urlImg: 'http://brinkidsonline.com.br/novosite/img/coloniaferias.png'
            },
            {
                id: 'produto-5',
                titulo: 'Eventos Externos',
                descri: 'Seja qual for a ocasião, a BRINKIDS vai até você.',
                urlImg: 'http://brinkidsonline.com.br/novosite/img/externo.png'
            },
            {
                id: 'produto-6',
                titulo: 'Casamentos',
                descri: 'No casamento oferecemos um espaço especial para as crianças com recreação e muito mais.',
                urlImg: 'http://brinkidsonline.com.br/novosite/img/casamento.png'
            },
            {
                id: 'produto-7',
                titulo: 'Datas Comemorativas',
                descri: 'Nossa programação conta com atividades temáticas durante todo o ano.',
                urlImg: 'http://brinkidsonline.com.br/novosite/img/calendario.png'
            },
            {
                id: 'produto-8',
                titulo: 'Cabanas',
                descri: 'Cabanas personalizadas com o seu tema favorito.',
                urlImg: 'http://brinkidsonline.com.br/novosite/img/cabanas.png'
            }
        ]
        const divProdutos = {
            marginLeft: '5%',
            padding: '0px 0px 42% 0px'
        }
        return (
            <div id={'produtos-lista'} style={divProdutos}>
                {listaDeProdutos.map(dados => <Produto key={dados.id} titulo={dados.titulo} descri={dados.descri} urlImg={dados.urlImg}></Produto>)}  
            </div>
        )
    }
}

export default Produtos