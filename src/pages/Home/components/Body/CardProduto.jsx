import { useContext } from 'react';
import { CartContext } from '../../../../contexts/cart';

const CardProduto = ({ id, name, description, price, photo_thumb }) => {
  const { addItemCart } = useContext(CartContext);

  const addItem = () => {
    const item = {
      id,
      name,
      price,
      photo_thumb,
      qtd: 1,
    };
    addItemCart(item);
  };

  return (
    <div className="flex items-center card w-56 bg-base-100 shadow-xl overflow-hidden">
      <img src={photo_thumb} className="w-full" alt={name} />
      <div className="card-body p-2">
        <h2 className="card-title">
          {name}
          <div className="badge bg-primary text-white text-xs">NEW</div>
        </h2>
        <p>{description}</p>
        <button onClick={addItem} className="w-full btn btn-primary">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default CardProduto;
