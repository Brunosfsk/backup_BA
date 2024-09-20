import { useContext } from 'react';
import { CartContext } from '../contexts/cart';
import { Separator } from './ui/separator';
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
    <div className=" p-4 border bg-muted rounded-lg flex justify-between items-center">
      <div className="w-full flex items-center gap-4">
        <img
          src={photo_thumb}
          alt={name}
          className="w-16 h-16 object-cover rounded overflow-hidden border border-muted-foreground"
        />
        <div className="flex-1 flex flex-col gap-1">
          <div>
            <h3 className="text-lg font-semibold text-primary">{name}</h3>
            <div className="flex gap-1 text-muted-foreground">
              <p>x{qtd} de</p>
              <p>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(price)}
              </p>
            </div>
          </div>
          <Separator />
          <p className="font-medium">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(price * qtd)}
          </p>

          {showBtn && (
            <div className="w-full flex justify-end">
              <div className="w-fit flex items-center mt-2 gap-2">
                <button
                  className="bg-muted-foreground text-secondary p-0.5 hover:bg-muted-foreground/70 transition-all flex items-center justify-center text-base font-bold rounded-md"
                  onClick={RemoveItem}
                >
                  <Minus className="size-5" />
                </button>
                <p>{qtd}</p>
                <button
                  className="bg-muted-foreground text-secondary p-0.5 hover:bg-muted-foreground/70 transition-all flex items-center justify-center text-base font-bold rounded-md"
                  onClick={AddItem}
                >
                  <Plus className="size-5" />
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
