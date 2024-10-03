import { useContext, useState } from 'react';
import { CartContext } from '@/contexts/cart';
import { Button } from '@/components/ui/button';
import '@/services/currency.js';
import '@/services/currency.js';
import { Drawer, DrawerContent, DrawerFooter } from '@/components/ui/drawer';

const CardProduto = ({ id, name, description, price, photo_thumb }) => {
  const { addItemCart } = useContext(CartContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addItem = () => {
    const item = {
      id,
      name,
      price,
      photo_thumb,
      qtd: 1,
    };
    addItemCart(item);
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <section className="flex flex-col items-center w-full md:w-[49%]">
      <article
        className="w-full flex gap-4 items-center border-y border-muted-foreground/80 py-2 cursor-pointer"
        onClick={openDrawer}
      >
        <div className="flex flex-col gap-1 flex-1">
          <div>
            <h3 className="text-sm font-semibold text-primary">{name}</h3>
            <p className="text-muted-foreground text-xs font-light">
              {description}
            </p>
          </div>
          <p className="text-sm font-semibold">
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(price)}
          </p>
        </div>
        <div className="relative flex-initial">
          <picture>
            <img
              className="w-24 h-full object-cover rounded-md"
              src={photo_thumb}
            />
          </picture>
        </div>
      </article>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} className="">
        <DrawerContent
          navHandler={false}
          className="w-full max-w-screen-md m-auto"
        >
          <div className="space-y-4">
            <picture>
              <img
                className="w-full h-auto object-cover rounded-b-[2.8rem]"
                src={photo_thumb}
                alt={name}
              />
            </picture>

            <div className="px-4">
              <h4 className="font-semibold text-lg">
                {name?.charAt(0).toUpperCase() +
                  name?.replace(name?.charAt(0), '')?.toLowerCase()}
              </h4>
              <p className="mt-1 text-gray-700">{description}</p>
              <p className="font-bold mt-1">
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(price)}
              </p>
            </div>
          </div>
          <DrawerFooter>
            <Button
              className="w-full"
              onClick={addItem} // Função para adicionar ao carrinho
            >
              Adicionar ao Carrinho
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default CardProduto;
