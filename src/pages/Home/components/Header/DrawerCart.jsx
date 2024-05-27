import { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../contexts/cart';
import ProductDetails from '../../../../components/ProductDetails';

export default function DrawerCart({qtd}) {
  const { cartItems, totalCart } = useContext(CartContext);

  const qtdPedidos = cartItems.length

console.log(cartItems)
console.log(totalCart)
  return (
    <div className="w-fit drawer drawer-end">
      <input id="drawer-cart" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content indicator">
        <label htmlFor="drawer-cart" className="drawer-button cursor-pointer">
          <span className="h-4 w-4 indicator-item badge bg-primary border-0 text-w z-0">{qtdPedidos}</span>
          <ShoppingCart />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer-cart"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu h-full bg-base-200 text-base-content justify-between p-4 pr-8 w-96 ">
          <ul className=" flex flex-col gap-2 h-4/5 overflow-auto">
            {cartItems.map((item) => {
              return (
                <ProductDetails
                  showBtn
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

          <div className="flex flex-col justify-end gap-3 h-1/5">
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
            <Link to="/checkout" className="btn bg-secondary text-w">
              Finalizar compra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
