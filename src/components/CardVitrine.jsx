import React from 'react';
// import { CartContext } from '../../contexts/contextCart';
// import { useContext } from 'react';


const CardVitrine = (props)=> {

  // const { AddItemCart } = useContext(CartContext)

  // function AddItem() {

  //   const item = {
  //     id: props.id,
  //     nome: props.nome,
  //     preco: props.preco,
  //     foto: props.foto,
  //     qtd: 1
  //   }
  //   AddItemCart(item);
  // }

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">
        {props.nome}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>{props.descricao}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div> 
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>

  );
}


export default CardVitrine;

{/* <Styled.ImageProduto img={props.foto} />
<div>
  <Styled.Title>{props.nome}</Styled.Title>
  <Styled.Description>{props.descricao}</Styled.Description> */}

  