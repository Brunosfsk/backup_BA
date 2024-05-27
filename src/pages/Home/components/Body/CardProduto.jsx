import { useContext } from 'react';
import { CartContext } from '../../../../contexts/cart';


const CardProduto = ({ id, nome, preco, foto, descricao }) => {
  const { AddItemCart } = useContext(CartContext);

  function AddItem() {
    const item = {
      id: id,
      nome: nome,
      preco: preco,
      foto: foto,
      qtd: 1,
    };
    AddItemCart(item);
  }

  return (
    <div className="flex items-center card w-56 bg-base-100 shadow-xl overflow-hidden">
      <img src={foto} className="w-full" />
      <div className="card-body p-2">
        <h2 className="card-title ">
          {nome}
          <div className="badge bg-primary text-white text-xs">NEW</div>
        </h2>
        <p>{descricao}</p>
        {/* <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div> */}
        <button onClick={AddItem} className="w-full  btn bg-secondary text-white">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default CardProduto;
