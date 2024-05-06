import { produtos } from '../../../../dados';
import CardProduto from './CardProduto';

const Body = () => {
  return (
    <div className="py-10 px-5 flex flex-col gap-6">
      <h2 className="text-2xl text-center">
        Faça sua escolha e adicione no seu carrinho de compras
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
