import { useContext } from 'react';
import ProductCart from './ProductCard';
import ButtonCart from '../../Buttons/ButtonCart';
import { CartContext } from '../../../../contexts/cart';

function ModalCart({ isOpen, setOpenModal }) {
  const { cartItems, totalCart } = useContext(CartContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-6 rounded-lg relative">
        <h2 className="text-xl font-bold mb-4">Carrinho de compras</h2>
        <button
          className="absolute top-2 right-2"
          onClick={() => setOpenModal(!isOpen)}
        >
          X
        </button>
        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <ProductCart
              showBtn={true}
              key={item.id}
              id={item.id}
              foto={item.foto}
              nome={item.nome}
              qtd={item.qtd}
              preco={item.preco}
            />
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <p className="font-bold">Total</p>
          <p>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalCart)}
          </p>
        </div>
        <ButtonCart text="Finalizar" />
      </div>
    </div>
  );
}

export default ModalCart;
