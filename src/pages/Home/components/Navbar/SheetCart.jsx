import { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ProductDetails from '@/components/ProductDetails';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '../../../../components/ui/button';
import { CartHomeContext } from '@/contexts/cartHome';

const OrderTotal = ({ totalCart }) => (
  <div>
    <span className="text-sm font-medium">Total do pedido</span>
    <br />
    <span className="text-4xl font-medium">
      {totalCart.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      })}
    </span>
  </div>
);

const CartBadge = ({ itemCount }) => (
  <div className="indicator z-0 relative">
    {itemCount > 0 && (
      <Badge
        variant="destructive"
        className="indicator-item text-xs size-4 p-1 flex justify-center items-center absolute -right-2 -top-2"
      >
        {itemCount}
      </Badge>
    )}
    <ShoppingCart className="text-background" />
  </div>
);

export default function SheetCart() {
  const { cartItems, totalCart, removeAllItems } = useContext(CartHomeContext);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Sheet
      open={cartItems.length > 0}
      onOpenChange={(e) => {
        if (e === false) {
          removeAllItems();
        }
      }}
    >
      <SheetContent>
        <SheetHeader className="h-full">
          <SheetTitle>Carrinho</SheetTitle>
          <SheetDescription className="h-full flex flex-col gap-2">
            <ScrollArea className="flex-1">
              <div className="flex flex-col gap-2 h-full">
                {cartItems.map((item, i) => (
                  <ProductDetails
                    showBtn
                    key={i}
                    id={item.id}
                    photo_thumb={item.photo_thumb}
                    name={item.name}
                    qtd={item.qtd}
                    price={item.price}
                  />
                ))}
              </div>
            </ScrollArea>
            <div className="flex-initial min-h-32 flex flex-col gap-1">
              <OrderTotal totalCart={totalCart} />
              <Link to={`/checkout`}>
                <Button>Finalizar compra</Button>
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
