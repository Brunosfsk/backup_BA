import React from 'react';
// import { CartContext } from '../../contexts/contextCart';
// import { useContext } from 'react';


const CardVitrine = (props) => {

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
    <div className="flex items-center card w-64 bg-base-100 shadow-xl">
      <figure><img src={props.foto} alt="Shoes" /></figure>
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
      <button className="w-10/12 px-2 mb-2 btn btn-primary">Primary</button>
    </div>

  );
}


export default CardVitrine;

{/* <Styled.ImageProduto img={props.foto} />
<div>
  <Styled.Title>{props.nome}</Styled.Title>
  <Styled.Description>{props.descricao}</Styled.Description> */}

