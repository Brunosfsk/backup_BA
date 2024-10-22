import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { useOrderPOST } from '@/hooks/order/useOrderPOST';
import { useOrdersGET } from '@/hooks/order/useOrdersGET';
import AddProductForm from './components/AddProductForm';
import { useOrderPATCH } from '@/hooks/order/useOrderPATCH';
import { useContext, useState } from 'react';
import { AuthContext } from '@/contexts/auth';
import { useBusinesssGET } from '@/hooks/bussiness/useBusinesssGET';

const Stores = () => {
  const [bussinessID, setBussinessID] = useState(null);
  const { nameURL, type } = useContext(AuthContext);
  const { data: rolesBussiness } = useBusinesssGET();

  const { data: orders } = useOrdersGET({
    active: null,
    ...(bussinessID ? { bussinessID } : { bussinessName: nameURL }),
  });
  const {
    mutate: mutateADD,
    isPending: isPendingADD,
    isError: isErrorADD,
    error: errorADD,
    data: dataADD,
  } = useOrderPOST();

  const {
    mutate: mutateEDIT,
    isPending: isPendingEDIT,
    data: dataEDIT,
  } = useOrderPATCH();

  const handleAddProduct = (productData) => {
    mutateADD(productData);
  };

  const handleEditProduct = (productData) => {
    mutateEDIT(productData);
  };

  return (
    <div className="p-4 h-dvh">
      <section className="relative flex flex-col min-w-0 break-words w-full rounded">
        <article className="rounded-t mb-0 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1 space-y-2">
              {type == 0 && (
                <Select onValueChange={setBussinessID}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Escolha um negócio" />
                  </SelectTrigger>
                  <SelectContent>
                    {rolesBussiness?.map(({ id, url }) => (
                      <SelectItem key={id} value={id}>
                        {url}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              <h3 className="font-semibold text-base">Produtos</h3>
            </div>
            <div className="relative w-full max-w-full flex-grow flex-1 text-right flex justify-end">
              {bussinessID && (
                <AddProductForm
                  message={dataADD?.error}
                  isPending={isPendingADD}
                  onSubmit={(data) =>
                    handleAddProduct({ ...data, bussinessID })
                  }
                />
              )}
            </div>
          </div>
        </article>

        <article className="block w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Catálogo</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders &&
                !orders.error &&
                orders.map(
                  (
                    {
                      id,
                      category,
                      category_name,
                      name,
                      price,
                      photo_thumb,
                      description,
                      active,
                    },
                    i,
                  ) => (
                    <TableRow key={i}>
                      <TableCell className="flex items-center gap-2">
                        <img
                          src={photo_thumb && photo_thumb}
                          alt="Foto do produto"
                          className="h-16"
                        />
                        <p>{name}</p>
                      </TableCell>
                      <TableCell>{category_name}</TableCell>
                      <TableCell>
                        {Number(price).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </TableCell>
                      <TableCell>
                        <Switch
                          defaultChecked={active}
                          onCheckedChange={(active) =>
                            handleEditProduct({ id, active })
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <AddProductForm
                          initialProductData={{
                            id,
                            category,
                            name,
                            price,
                            photo_thumb,
                            description,
                          }}
                          isPending={isPendingEDIT}
                          message={dataEDIT?.error}
                          onSubmit={(data) =>
                            handleEditProduct({ ...data, id_business: id })
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ),
                )}
            </TableBody>
          </Table>
        </article>
      </section>

      {isErrorADD && <p className="text-red-500">Erro: {errorADD.message}</p>}
      {isPendingADD && <p className="text-blue-500">Cadastrando produto...</p>}
    </div>
  );
};

export default Stores;
