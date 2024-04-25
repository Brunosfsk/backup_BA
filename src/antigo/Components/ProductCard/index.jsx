import React from 'react'
import *as Styled from './style'
import { useContext } from 'react'
import { CartContext } from '../../contexts/contextCart'

export default function ProductCart(props) {

  const { AddItemCart, RemoveItemCart } = useContext(CartContext)

  function AddItem() {

    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1
    }
    AddItemCart(item);
  }

  function RemoveItem() {
    RemoveItemCart(props.id);
  }

  var totalItem = props.preco * props.qtd;

  return (
    <Styled.Box>
      {
        props.showBtn ?
          <div>
            <Styled.ImgCart />
            <div>
              <Styled.TextNome>{props.nome}</Styled.TextNome>
              <Styled.TextValor>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.preco)}</Styled.TextValor>
              <Styled.FooterCart>
                <Styled.BoxContagem>
                  <Styled.ButtonContador onClick={RemoveItem}>-</Styled.ButtonContador>
                  <Styled.QtdProdutos>{props.qtd}</Styled.QtdProdutos>
                  <Styled.ButtonContador onClick={AddItem}>+</Styled.ButtonContador>
                </Styled.BoxContagem>
                <Styled.TextPrice>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalItem)}</Styled.TextPrice>
              </Styled.FooterCart>
            </div>
          </div>


          :
          <Styled.DivRow>
            <Styled.QtdProdutos>{props.qtd}</Styled.QtdProdutos>
            <Styled.ImgCart />
            
              <Styled.Nome>{props.nome}</Styled.Nome>
              {/* <Styled.Valor>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.preco)}</Styled.Valor> */}
              <Styled.FooterCart>
                <Styled.TextPrice>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalItem)}</Styled.TextPrice>
              </Styled.FooterCart>
            
          </Styled.DivRow>
      }


    </Styled.Box>
  )
}



