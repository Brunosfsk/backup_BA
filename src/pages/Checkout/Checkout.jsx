import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart';
import ProductDetails from '../../components/ProductDetails';
import { useWhatsMessage } from '../../hooks/public/useWhatsMessage';

const Checkout = () => {
  const { totalCart = 0, cartItems = [] } = useContext(CartContext);
  const totalCompra = totalCart + 10;

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const { mutate } = useWhatsMessage();

  const handleConfirmPedido = () => {
    const modal = document.getElementById('modal_confirm_pedido');
    if (modal) {
      modal.showModal();
    }
  };

  const handleSubmit = async () => {
    const pedido = {
      nomeCompleto,
      email,
      whatsapp,
      endereco: {
        cep,
        rua,
        bairro,
        cidade,
      },
      formaPagamento,
      itens: cartItems,
      totalCompra,
    };

    await mutate({ pedido });
  };

  return (
    <section className="h-dvh flex flex-col justify-between">
      <div className="w-full justify-center p-4 md:px-10 md:py-8 ">
        <h1 className="text-4xl font-bold">Detalhes do Pedido</h1>
        <div className="divider"></div>
        <div className="flex flex-col md:flex-row w-full justify-around">
          <div className="flex flex-col flex-1 border-opacity-50">
            <div>
              <div className="w-full md:w-96 bg-base-100 flex flex-col gap-4">
                <h3 className="text-xl">Dados Pessoais</h3>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Nome Completo"
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="email"
                    className="grow"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </label>
              </div>
              <div className="divider"></div>
              <div className="w-full md:w-96 bg-base-100 flex flex-col gap-4">
                <h3 className="text-xl">Endereço para Entrega</h3>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Rua"
                    value={rua}
                    onChange={(e) => setRua(e.target.value)}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Bairro"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex-1 bg-base-100 flex flex-col gap-2 md:gap-4 pt-5 md:pt-0">
            <h3 className="text-xl">Resumo do Pedido</h3>
            {cartItems.map((item, i) => (
              <ProductDetails
                key={i}
                id={item.id}
                photo_thumb={item.photo_thumb}
                name={item.name}
                qtd={item.qtd}
                price={item.price}
              />
            ))}
            <h2>
              Total pedido{' '}
              {totalCart.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </h2>
            <h2 className="">Frete 10,00</h2>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex-1 bg-base-100 flex flex-col gap-4">
            <div className="flex flex-col w-full md:w-fit border-opacity-50">
              <div className="bg-base-100 flex md:flex-col w-full items-center gap-1 md:gap-4 font-bold max-md:pt-3">
                <h2 className="text-2xl md:font-medium">Total:</h2>
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
                        checked={formaPagamento === 'Pix'}
                        onChange={(e) => setFormaPagamento(e.target.value)}
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
                        checked={formaPagamento === 'Dinheiro'}
                        onChange={(e) => setFormaPagamento(e.target.value)}
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
                        checked={formaPagamento === 'Cartao'}
                        onChange={(e) => setFormaPagamento(e.target.value)}
                      />
                      <span className="label-text text-base w-full pl-3">
                        Cartão
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  className="btn btn-active bg-secondary text-w"
                  onClick={handleConfirmPedido}
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
            {cartItems.map((item, i) => (
              <ProductDetails
                key={i}
                id={item.id}
                photo_thumb={item.photo_thumb}
                name={item.name}
                qtd={item.qtd}
                price={item.price}
              />
            ))}
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn bg-secondary text-w"
                  onClick={handleSubmit}
                >
                  Confirmar
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  );
};

export default Checkout;
