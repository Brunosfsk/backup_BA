import ProductDetails from '@/components/ProductDetails';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { CartHomeContext } from '@/contexts/cartHome';
import { ChevronLeft } from 'lucide-react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CartHome = () => {
  const { cartItems, totalCart, removeAllItems } = useContext(CartHomeContext);
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col w-full">
      <div
        className="flex-initial py-3 px-4 flex gap-2 items-center border-b border-muted-foreground/20"
        onClick={() => {
          removeAllItems();
          navigate(-1);
        }}
      >
        <ChevronLeft className="size-6" />
        <p className="text-lg">Carrinho</p>
      </div>
      <ScrollArea className="flex-1 px-4 pt-2">
        <div className="flex flex-col gap-1 h-full">
          {cartItems?.map((item, i) => (
            <>
              <ProductDetails
                showBtn
                key={i}
                id={item.id}
                photo_thumb={item.photo_thumb}
                name={item.name}
                qtd={item.qtd}
                price={item.price}
              />
              {Boolean(
                cartItems?.length >= 2 && cartItems?.length != i + 1,
              ) && <Separator />}
            </>
          ))}
        </div>
      </ScrollArea>
      <footer className="fixed bottom-0 w-full border-t border-muted-foreground/20 px-2 py-2">
        <Link to={`/checkout`}>
          <Button className="w-full flex justify-between gap-2">
            <p>Avançar</p>
            <p>
              {totalCart.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </Button>
        </Link>
      </footer>
    </div>
  );
};

export default CartHome;
