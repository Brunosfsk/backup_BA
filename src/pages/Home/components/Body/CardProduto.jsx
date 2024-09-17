import { useContext } from 'react';
import { CartContext } from '../../../../contexts/cart';
import { Card } from '@/components/ui/card';
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';

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
    <Card className="max-w-60 flex flex-col justify-between">
      <CardHeader>
        <CardTitle>
          <img src={photo_thumb} className="w-full" alt={name} />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex gap-2 font-bold">
          {name} <Badge>NEW</Badge>
        </div>
        <p className="text-xs xl:text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={addItem} className="w-full text-xs xl:text-sm">
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduto;
