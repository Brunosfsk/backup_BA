import { useContext } from 'react';
import { CartContext } from '@/contexts/cart';
import { Card } from '@/components/ui/card';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import '@/services/currency.js';

const CardProduto = ({ id, name, description, price, photo_thumb }) => {
  const { addItemCart } = useContext(CartContext);

  const addItem = () => {
    const item = {
      id,
      name,
      price,
      photo_thumb,
      qtd: 1,
    };
    addItemCart(item);
  };

  return (
    <Card className="max-w-[48%] flex-1 flex-grow-1 flex-shrink-0 basis-[45%] md:max-w-60 flex flex-col justify-between">
      <CardHeader className="max-md:py-2">
        <CardTitle>
          <img src={photo_thumb} className="w-full p-0" alt={name} />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 max-md:p-2">
        <div className="flex items-center gap-1 font-bold max-md:text-sm md:gap-2 ">
          {name}{' '}
          <Badge className="max-md:text-xs px-1 bg-yellow-700">NEW</Badge>
        </div>
        <p className="text-xs xl:text-sm">{description}</p>
      </CardContent>
      <CardFooter className="max-md:p-2">
        <Button onClick={addItem} className="w-full text-xs xl:text-sm">
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduto;
