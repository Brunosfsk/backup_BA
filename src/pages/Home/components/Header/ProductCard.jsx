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
    <div className=" p-4 border rounded-lg flex justify-between items-center">
      <div className="w-full flex items-center gap-4">
        <img
          src={foto}
          alt={nome}
          className="w-16 h-16 object-cover  rounded overflow-hidden"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{nome}</h3>
          <p className="text-gray-500">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(preco)}
          </p>
          {showBtn && (
            <div className="w-full flex justify-end">
              <div className="w-fit flex items-center mt-2 gap-2">
                <button
                  className="bg-gray-300 text-gray-700 size-6 flex items-center justify-center text-base font-bold rounded-md"
                  onClick={RemoveItem}
                >
                  -
                </button>
                <p>{qtd}</p>
                <button
                  className="bg-gray-300 text-gray-700 size-6 flex items-center justify-center text-base font-bold rounded-md"
                  onClick={AddItem}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
