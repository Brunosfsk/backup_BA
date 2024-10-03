import { useOrdersGET } from '@/hooks/order/useOrdersGET';
import CardProduto from './CardProduto';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Body = () => {
  const { data: orders } = useOrdersGET();
  const [selectedCategory, setSelectedCategory] = useState('all-category');

  const ordersByCategory = orders?.reduce((acc, order) => {
    const { category_name } = order;
    if (!acc[category_name]) {
      acc[category_name] = [];
    }
    acc[category_name].push(order);
    return acc;
  }, {});

  const categories = orders ? Object.keys(ordersByCategory) : [];

  return (
    <section className="flex w-full md:gap-4 md:justify-center min-h-dvh">
      <div className="py-4 2xl:py-10 px-5 flex flex-col gap-4 max-w-7xl">
        <Select
          value={selectedCategory}
          onValueChange={(e) => setSelectedCategory(e)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Todas as Categorias" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-category">Todas as Categorias</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="pb-4 flex flex-wrap gap-x-4 justify-between md:justify-start">
          {!orders?.error &&
            ordersByCategory &&
            Object.keys(ordersByCategory)
              .filter(
                (category_name) =>
                  selectedCategory === 'all-category' ||
                  category_name === selectedCategory,
              )
              .map((category_name) => (
                <div key={category_name} className="mb-8 w-full">
                  <h2 className="text-xl font-bold mb-2 uppercase">
                    {category_name}
                  </h2>
                  <div className="flex flex-wrap gap-x-4">
                    {ordersByCategory[category_name].map(
                      ({ id, name, description, price, photo_thumb }, i) => (
                        <CardProduto
                          key={i}
                          id={id}
                          name={name}
                          description={description}
                          price={price}
                          photo_thumb={photo_thumb}
                        />
                      ),
                    )}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Body;
