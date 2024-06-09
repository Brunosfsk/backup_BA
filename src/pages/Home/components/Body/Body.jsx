import { useOrdersBussines } from '../../../../hooks/public/useOrdersBussines';
import CardProduto from './CardProduto';

const Body = () => {
  const { data: orders } = useOrdersBussines();
  return (
    <div className="py-10 px-5 flex flex-col gap-6">
      <h2 className="text-2xl text-center">
        <div class="text-center">
          <span class="block text-4xl font-extrabold uppercase text-primary-700 leading-none">
            Faça sua escolha
          </span>
          <span class="block text-xl font-light lowercase text-primary-400 leading-none">
            e
          </span>
          <span class="block text-2xl font-medium uppercase text-primary-500 leading-none">
            adicione no seu carrinho
          </span>
          <span class="block text-3xl font-bold uppercase text-primary-600 leading-none">
            decompras
          </span>
        </div>
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {orders &&
          !orders.error &&
          orders.map(({ id, name, description, price, photo_thumb }, i) => (
            <CardProduto
              key={i}
              id={id}
              name={name}
              description={description}
              price={price}
              photo_thumb={photo_thumb}
            />
          ))}
      </div>
    </div>
  );
};

export default Body;
