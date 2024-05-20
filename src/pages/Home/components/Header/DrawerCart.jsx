import { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../contexts/cart';
import ProductDetails from '../../../../components/ProductDetails';

const OrderTotal = ({ totalCart }) => (
  <h3>
    <span className="text-sm font-medium">Total do pedido</span>
    <br />
    <span className="text-4xl font-medium">
      {totalCart.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })}
    </span>
  </h3>
);

const CartBadge = ({ itemCount }) => (
  <div className="indicator z-0">
    {itemCount > 0 && (
      <span className="indicator-item badge badge-secondary text-xs size-5">
        {itemCount}
      </span>
    )}
    <ShoppingCart />
  </div>
);

export default function DrawerCart() {
  const { cartItems, totalCart } = useContext(CartContext);

  return (
    <div className="w-fit z-50 drawer drawer-end">
      <input id="drawer-cart" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="drawer-cart" className="drawer-button cursor-pointer">
          <CartBadge itemCount={cartItems.length} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer-cart"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu h-full bg-base-200 text-base-content justify-between p-4 pr-8 w-96 ">
          <ul className="flex flex-col gap-2 h-4/5 overflow-auto">
            {cartItems.map((item) => (
              <ProductDetails
                showBtn
                key={item.id}
                id={item.id}
                foto={item.foto}
                nome={item.nome}
                qtd={item.qtd}
                preco={item.preco}
              />
            ))}
          </ul>

          <div className="flex flex-col justify-end gap-3 h-1/5">
            <OrderTotal totalCart={totalCart} />
            <Link to="/checkout" className="btn btn-primary">
              Finalizar compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
