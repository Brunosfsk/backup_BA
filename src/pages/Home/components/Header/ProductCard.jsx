import { useContext } from 'react';
import { CartContext } from '../../../../contexts/contextCart';

function ProductCart({ id, nome, preco, foto, qtd, showBtn }) {
  const { AddItemCart, RemoveItemCart } = useContext(CartContext);

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

  function RemoveItem() {
    RemoveItemCart(id);
  }

  const totalItem = preco * qtd;

  return (
    <div className="p-4 border rounded-lg flex justify-between items-center">
      {showBtn ? (
        <div className="flex items-center">
          <img src={foto} alt={nome} className="w-16 h-16 object-cover mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{nome}</h3>
            <p className="text-gray-500">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(preco)}
            </p>
            <div className="flex items-center mt-2">
              <button
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md mr-2"
                onClick={RemoveItem}
              >
                -
              </button>
              <p>{qtd}</p>
              <button
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md ml-2"
                onClick={AddItem}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <p className="mr-4">{qtd}</p>
          <img src={foto} alt={nome} className="w-16 h-16 object-cover mr-4" />
          <div>
            <h3 className="text-lg font-semibold">{nome}</h3>
            <p className="text-gray-500">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalItem)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCart;
