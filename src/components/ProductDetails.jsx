import { useContext } from 'react';
import { CartContext } from '../contexts/cart';
import { Minus, Plus } from 'lucide-react';

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
    <div className="p-4 rounded-lg flex justify-between items-center">
      <div className="w-full flex items-center gap-4">
        <img
          src={photo_thumb}
          alt={name}
          className="w-12 h-12 object-cover rounded overflow-hidden border border-muted-foreground"
        />
        <div className="flex-1 flex flex-col">
          <h3 className="font-medium text-primary">
            {qtd}x {name}
          </h3>
          <p className="font-semibold">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(price * qtd)}
          </p>
        </div>
        {showBtn && (
          <div className="flex items-center gap-2 border border-muted-foreground/30 rounded-lg px-1 py-1">
            <button
              className="text-muted-foreground p-0.5 transition-all flex items-center justify-center text-base font-bold rounded-md"
              onClick={RemoveItem}
            >
              <Minus className="size-5" />
            </button>
            <p>{qtd}</p>
            <button
              className="text-muted-foreground p-0.5 transition-all flex items-center justify-center text-base font-bold rounded-md"
              onClick={AddItem}
            >
              <Plus className="size-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
