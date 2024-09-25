import { useOrdersBussines } from '../../../../hooks/public/useOrdersBussines';
import CardProduto from './CardProduto';

const Body = () => {
  const { data: orders } = useOrdersBussines();
  console.log(orders)
  return (
    <div className="py-4 2xl:py-10 px-5 flex flex-wrap justify-between lg:justify-center gap-2 md:gap-4">
      {!orders?.error &&
        orders?.map(({ id, name, description, price, photo_thumb }, i) => (
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
  );
};

export default Body;
