import * as Styled from './styles';
import React from 'react';
import { CartContext } from '../../contexts/contextCart';
import { useContext } from 'react';


function Card_Vitrine(props) {

  const { AddItemCart } = useContext(CartContext)

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

  return (
    <Styled.ProdutoBox>
      <Styled.ImageProduto img={props.foto} />
      <div>
        <Styled.Title>{props.nome}</Styled.Title>
        <Styled.Description>{props.descricao}</Styled.Description>
        <Styled.Price>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.preco)}</Styled.Price>
      </div>
      <div>
        <Styled.Btn onClick={AddItem}>
          {/* <Styled.IconButton> */}
          Adicionar
          {/* </Styled.IconButton> */}
        </Styled.Btn>
      </div>
    </Styled.ProdutoBox>
  );

}


export default Card_Vitrine;

