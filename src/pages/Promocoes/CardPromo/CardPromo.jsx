import React from 'react'

function CardPromo({ nome, preco, descricao, imagem }) {
    return (
        <div className="card bg-base-100 shadow-xl m-4 w-full md:w-72 lg:w-72"> {/* Aumentar a largura */}
            <figure><img className='w-full h-48' src={imagem} alt={nome} /></figure>
            <div className="card-body">
                <h2 className="card-title">{nome}</h2>
                <p>{descricao}</p>
                <div className="card-actions justify-end">
                    <span className="text-lg font-bold text-primary">{preco}</span>
                </div>
            </div>
        </div>
    )
}

export default CardPromo
