function Checkout() {
  return (
    <section className="w-full h-dvh flex items-center justify-center px-10 py-8">
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
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex-1 bg-base-100 flex flex-col gap-4">
          <div className="flex flex-col w-fit border-opacity-50">
            <div className="bg-base-100 flex flex-col gap-4">
              <h2 className="text-2xl font-medium">Total</h2>
              <p className="text-xl">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(77)}
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
                className="btn btn-active btn-primary"
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
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}

export default Checkout;
