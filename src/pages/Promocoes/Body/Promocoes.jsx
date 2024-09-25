import React from 'react'
import CardPromo from '../CardPromo/CardPromo'

const produtos = [
    {
        nome: 'Pizza Margherita',
        preco: 'R$ 39,90',
        descricao: 'Pizza clássica com molho de tomate, mussarela e manjericão.',
        imagem: 'https://s2-receitas.glbimg.com/aOqutzWVjENKMw1htEAzVs33CpE=/0x0:1200x675/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/h/r/EfCbvqTbeDRAD3Lzc5xA/pizza-margherita.jpg'
    },
    {
        nome: 'Hambúrguer Gourmet',
        preco: 'R$ 29,90',
        descricao: 'Hambúrguer artesanal com queijo cheddar, bacon e molho especial.',
        imagem: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-hamburguer-gourmet.jpg'
    },
    {
        nome: 'Sushi Combo',
        preco: 'R$ 49,90',
        descricao: 'Combo de sushi com 10 peças variadas.',
        imagem: 'https://www.querouai.com.br/gestao/img/produtos/20_1798_20221026071017.jpeg'
    },
    {
        nome: 'Salada Caesar',
        preco: 'R$ 19,90',
        descricao: 'Salada Caesar com alface, frango grelhado, croutons e molho Caesar.',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Alh6ISZ2D-O1t0fSHWre3urdoTf7h2SogQ&s'
    },
    {
        nome: 'Burrito de Carne',
        preco: 'R$ 24,90',
        descricao: 'Burrito recheado com carne, feijão, queijo e molho picante.',
        imagem: 'data:image/jpeg;base64,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'
    },
    {
        nome: 'Açaí Bowl',
        preco: 'R$ 15,90',
        descricao: 'Tigela de açaí com frutas frescas e granola.',
        imagem: 'data:image/jpeg;base64,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'
    },
];

function Promocoes() {
    return (
        <div className='flex flex-col items-center p-8'> {/* Adicionado padding */}
            <h1 className='h-10'>Promoções</h1>
            <div className='w-full h-64'>
                <img className='w-full h-full object-cover' src='https://images03.nicepage.com/c461c07a441a5d220e8feb1a/a1ea40a9cd9359afad0a4d1f/5352.jpg' />
            </div>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> {/* Aumentar espaçamento */}
                {produtos.map((produto, index) => (
                    <CardPromo
                        key={index}
                        nome={produto.nome}
                        preco={produto.preco}
                        descricao={produto.descricao}
                        imagem={produto.imagem}
                    />
                ))}
            </div>
        </div>
    )
}

export default Promocoes