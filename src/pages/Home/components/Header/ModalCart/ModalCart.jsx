import React, { useContext } from 'react';
import ProductCart from '../ProductCart/ProductCard';
// import { CartContext } from '../../contexts/contextCart';
import ButtonCart from '../../Buttons/ButtonCart';

function ModalCart({ inOpen, setOpenModal }) {
  //   const { cartItems, totalCart } = useContext(CartContext);

  if (inOpen) {
    return (
      <div className="fixed inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white w-96 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Carrinho de compras</h2>
          <button
            className="absolute top-2 right-2"
            onClick={() => setOpenModal(!inOpen)}
          >
            X
          </button>
          <div className="divide-y divide-gray-200">
            {/* {cartItems.map((item) => (
              <ProductCart showBtn={true}
                key={item.id}
                id={item.id}
                foto={item.foto}
                nome={item.nome}
                qtd={item.qtd}
                preco={item.preco}
              />
            ))} */}
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
          <ButtonCart text={Finalizar} />
        </div>
      </div>
    );
  }
  return null;
}

export default ModalCart;
