import { useContext } from 'react';
import Footer from '../../components/Footer';
import { CartContext } from '../../contexts/cart';
import ProductDetails from '../../components/ProductDetails';

function Checkout() {
  const { totalCart, cartItems } = useContext(CartContext);
  const totalCompra = totalCart + 10;
  console.log(totalCompra, totalCart)
  return (
    <section className="h-dvh flex flex-col justify-between">
      <div className="w-full justify-center px-10 py-8">
        <h1 className="text-4xl font-bold ">Detalhes do Pedido</h1>
        <div className="divider"></div>
        <div className="flex w-full justify-around">
          <div className="flex flex-col flex-1 border-opacity-50">
            <div>
              <div className="w-96 bg-base-100 flex flex-col gap-4">
                <h3 className="text-xl">Dados Pessoais</h3>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Nome Completo"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="email" className="grow" placeholder="E-mail" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Whatsapp" />
                </label>
              </div>
              <div className="divider"></div>
              <div className="w-96 bg-base-100 flex flex-col gap-4">
                <h3 className="text-xl">Endereço para Entrega</h3>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="CEP" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Rua" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Bairro" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Cidade" />
                </label>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex-1 bg-base-100 flex flex-col gap-4">
            <h3 className="text-xl">Resumo do Pedido</h3>
            {cartItems.map((item) => {
              return (
                <ProductDetails
                  key={item.id}
                  id={item.id}
                  foto={item.foto}
                  nome={item.nome}
                  qtd={item.qtd}
                  preco={item.preco}
                />
              );
            })}
          <h2 >Total pedido {totalCart}</h2>
          <h2 className=''>Frete 10,00</h2>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex-1 bg-base-100 flex flex-col gap-4">
            <div className="flex flex-col w-fit border-opacity-50">
              <div className="bg-base-100 flex flex-col gap-4">
                <h2 className="text-2xl font-medium">Total</h2>
                <p className="text-xl">
                  {totalCompra.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </div>
              <div className="divider"></div>
              <div className="bg-base-100 flex flex-col gap-4">
                <h3 className="text-xl">Forma de pagamento</h3>
                <div className="flex flex-wrap gap-1">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="card-pgto"
                        className="radio"
                        value="Pix"
                      />
                      <span className="label-text text-base w-full pl-3">
                        Pix
                      </span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="card-pgto"
                        className="radio"
                        value="Dinheiro"
                      />
                      <span className="label-text text-base w-full pl-3">
                        Dinheiro
                      </span>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name="card-pgto"
                        className="radio"
                        value="Cartao"
                      />
                      <span className="label-text text-base w-full pl-3">
                        Cartao
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  className="btn btn-active bg-secondary text-w"
                  onClick={() =>
                    document.getElementById('modal_confirm_pedido').showModal()
                  }
                >
                  Confirmar pedido
                </button>
              </div>
            </div>
          </div>
        </div>

        <dialog id="modal_confirm_pedido" className="modal">
          <div className="modal-box w-11/12 max-w-5xl flex flex-col gap-4">
            <h3 className="font-bold text-lg">Confirmar pedido</h3>
            {cartItems.map((item) => {
              return (
                <ProductDetails
                  key={item.id}
                  id={item.id}
                  foto={item.foto}
                  nome={item.nome}
                  qtd={item.qtd}
                  preco={item.preco}
                />
              );
            })}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn bg-secondary text-w">Confirmar</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  );
}

export default Checkout;
