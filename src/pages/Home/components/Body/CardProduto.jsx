import { useContext } from 'react';
import { CartContext } from '../../../../contexts/cart';

const CardProduto = ({ id, nome, preco, foto, descricao }) => {
  const { addItemCart } = useContext(CartContext);

  const addItem = () => {
    const item = {
      id,
      nome,
      preco,
      foto,
      qtd: 1,
    };
    addItemCart(item);
  };

  return (
    <div className="flex items-center card w-56 bg-base-100 shadow-xl overflow-hidden">
      <img src={foto} className="w-full" alt={nome} />
      <div className="card-body p-2">
        <h2 className="card-title">
          {nome}
          <div className="badge bg-primary text-white text-xs">NEW</div>
        </h2>
        <p>{descricao}</p>
        <button onClick={addItem} className="w-full btn btn-primary">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default CardProduto;
