import { CartContext } from '../../contexts/contextCart'
import { useContext } from 'react';
import ProductCart from '../ProductCart/ProductCard'

export default function DrawerCart({inOpen, setOpenModal}) {
  const { cartItems, totalCart } = useContext(CartContext);
  
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Sacola</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {
            cartItems.map((item) => {
              return (
                <ProductCart
                  key={item.id}
                  id={item.id}
                  foto={item.foto}
                  nome={item.nome}
                  qtd={item.qtd}
                  preco={item.preco} />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
