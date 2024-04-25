import React, { useContext } from 'react'
import *as Styled from './style'
import { CartContext } from '../../contexts/contextCart'
import ProductCart from '../ProductCard';

export default function ModalFinalizarPedido({ isOpen }) {
    const { totalCart, cartItems } = useContext(CartContext);

    // console.log(cartItems)

    if (isOpen) {
        return (
            <Styled.Container>
                <Styled.BoxModal>
                    <Styled.TitleModal>Confirmar Pedido</Styled.TitleModal>
                    <Styled.BoxInfoPedido>
    
                    {
                        cartItems.map((item) => {
                            return <ProductCart showBtn={false} key={item.id}
                                id={item.id}
                                foto={item.foto}
                                nome={item.nome}
                                qtd={item.qtd}
                                preco={item.preco}
                            />
                        })
                        
                    }
                    </Styled.BoxInfoPedido>
                    <p>Aqui dados entrega</p>
                    <Styled.BoxDadosEntrega>
                        <p>Aqui dados entrega</p>
                    </Styled.BoxDadosEntrega>
                </Styled.BoxModal>
            </Styled.Container>
        )
    }
    return null

}

