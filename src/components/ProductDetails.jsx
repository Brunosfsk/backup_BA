import { useContext } from 'react';
import { CartContext } from '../contexts/cart';

function ProductDetails({ id, name, price, photo_thumb, qtd, showBtn }) {
  const { addItemCart, removeItemCart } = useContext(CartContext);

  async function AddItem() {
    const item = {
      id,
      name,
      price,
      photo_thumb,
      qtd: 1,
    };
    await addItemCart(item);
  }

  async function RemoveItem() {
    await removeItemCart(id);
  }

  return (
    <div className=" p-4 border border-white/40 rounded-lg flex justify-between items-center">
      <div className="w-full flex items-center gap-4">
        <img
          src={photo_thumb}
          alt={name}
          className="w-16 h-16 object-cover  rounded overflow-hidden"
        />
        <p>{qtd}</p>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-400/90">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(price)}
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

export default ProductDetails;
