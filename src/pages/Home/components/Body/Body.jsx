import { produtos } from '../../../../dados';
import CardProduto from './CardProduto';

const Body = () => {
  return (
    <div className="py-10 px-5 flex flex-col gap-6">
      <h2 className="text-2xl text-center">
        <div class="text-center">
          <span class="block text-4xl font-extrabold uppercase text-primary-700 leading-none">Faça sua escolha</span>
          <span class="block text-xl font-light lowercase text-primary-400 leading-none">e</span>
          <span class="block text-2xl font-medium uppercase text-primary-500 leading-none">adicione no seu carrinho</span>
          <span class="block text-3xl font-bold uppercase text-primary-600 leading-none">decompras</span>
        </div>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {produtos.map((prod) => (
          <CardProduto
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
            foto={prod.foto}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
