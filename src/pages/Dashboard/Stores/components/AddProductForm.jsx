import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useOrderRolesCategoryGET } from '@/hooks/order/useOrderRolesCategoryGET';
import { Textarea } from '@/components/ui/textarea';
import { SquarePen } from 'lucide-react';

const AddProductForm = ({
  onSubmit,
  message,
  initialProductData,
  isPending,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    photo_thumb: '',
  });

  const { data: rolesCategory } = useOrderRolesCategoryGET();
  useEffect(() => {
    if (initialProductData) {
      setProductData(initialProductData);
    }
  }, [initialProductData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(productData);

    if (!initialProductData) {
      setProductData({
        name: '',
        category: '',
        price: '',
        description: '',
        photo_thumb: '',
      });
    }
  };

  // useEffect(() => {
  //   if (!message) {
  //     setIsOpen(false);
  //   }
  // }, [message]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {initialProductData ? (
          <SquarePen
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        ) : (
          <Button
            variant="default"
            className="flex gap-1 items-center "
            onClick={() => setIsOpen(true)}
          >
            Adicionar Produto
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {initialProductData ? 'Editar Produto' : 'Adicionar Produto'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do Produto</Label>
              <Input
                id="name"
                name="name"
                value={productData.name}
                onChange={handleChange}
                placeholder="Digite o nome do produto"
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={productData.price}
                onChange={handleChange}
                placeholder="Digite o preço"
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                name="description"
                type="text"
                value={productData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Categoria</Label>
              <Select
                value={productData?.category || ''}
                onValueChange={(value) =>
                  setProductData((prev) => ({ ...prev, category: value }))
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue>
                    {productData?.category
                      ? rolesCategory?.find(
                          (role) => role.id == productData.category,
                        )?.name
                      : 'Selecione uma categoria'}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {rolesCategory?.map((role) => (
                      <SelectItem value={role.id} key={role.id}>
                        {role.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="photo_thumb">URL da Imagem</Label>
              <Input
                id="photo_thumb"
                name="photo_thumb"
                value={productData.photo_thumb}
                onChange={handleChange}
                placeholder="Cole o link da imagem do produto"
              />
            </div>
          </div>
          <DialogFooter className="pt-10 flex sm:justify-start">
            <div>
              {message && <p className="text-destructive">{message}</p>}
              <Button type="submit" loading={isPending}>
                {initialProductData ? 'Salvar' : 'Cadastrar'}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductForm;
