import { useContext } from 'react';
import ProductCart from './ProductCard';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../contexts/contextCart';

export default function DrawerCart() {
  const { cartItems, totalCart } = useContext(CartContext);

  return (
    <div className="w-fit drawer drawer-end">
      <input id="drawer-cart" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="drawer-cart" className="drawer-button cursor-pointer">
          <ShoppingCart />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer-cart"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu min-h-full bg-base-200 text-base-content justify-between p-4 pr-8 w-80">
          <ul className=" flex flex-col gap-2">
            {cartItems.map((item) => {
              return (
                <ProductCart
                  key={item.id}
                  id={item.id}
                  foto={item.foto}
                  nome={item.nome}
                  qtd={item.qtd}
                  preco={item.preco}
                />
              );
            })}
          </ul>

          <div className="flex flex-col gap-3">
            <h3>
              <span className="text-sm font-medium">Total do pedido</span>
              <br />
              <span className="text-4xl font-medium">R$ {totalCart}</span>
            </h3>
            <Link to="/checkout" className="btn btn-primary">
              Finalizar compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
