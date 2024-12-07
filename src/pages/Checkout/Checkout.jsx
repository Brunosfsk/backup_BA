import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart';
import ProductDetails from '../../components/ProductDetails';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTelegramPOST } from '@/hooks/telegram/useTelegramPOST';

const Checkout = () => {
  const { totalCart = 0, cartItems = [] } = useContext(CartContext);
  const totalCompra = totalCart + 10;

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [open, setOpen] = useState(false);
  const {
    mutate: mutateTelegramPOST,
    isPending,
    isSuccess,
    isError,
  } = useTelegramPOST(); // Use the hook

  const handleConfirmPedido = () => {
    setOpen(true);
  };

  const handleSubmit = async () => {
    const telegramData = {
      dadosLoja: {
        nomeLoja: "Buno Pizza's",
        numeroLoja: '11986413385',
      },
      dadosPessoais: {
        nome: nomeCompleto,
        email: email,
        tel: whatsapp,
      },
      endereco: {
        rua: rua,
        complemento: '', // Add complemento if available
        cep: cep,
        bairro: bairro,
        cidade: cidade,
      },
      dadosPedido: {
        pedidos: cartItems.map((item) => ({
          pedido: item.name,
          descricao: '', // Add description if available
          qtd: item.qtd,
          valor: item.price,
        })),
        valorPedidos: totalCart,
        entrega: 10.0,
        totalPedido: totalCompra,
        tipoPgto: formaPagamento,
      },
    };
    mutateTelegramPOST(telegramData);
  };

  return (
    <section className="flex flex-col justify-between h-dvd">
      <div className="w-full p-4 md:px-10 md:py-8 h-full flex flex-col">
        <h1 className="text-4xl font-bold flex-initial">Detalhes do Pedido</h1>
        <Separator className="my-4 flex-initial" />
        <div className="flex flex-col md:flex-row md:flex-1 w-full justify-around gap-6">
          <div className="flex flex-col flex-1 h-full">
            <div className="w-full md:w-96 flex flex-col gap-4">
              <h3 className="text-xl">Dados Pessoais</h3>
              <Input
                type="text"
                placeholder="Nome Completo"
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
              />
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
              />
            </div>
            <Separator className="my-4" />
            <div className="w-full md:w-96 flex flex-col gap-4">
              <h3 className="text-xl">Endereço para Entrega</h3>
              <Input
                type="text"
                placeholder="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>
          </div>
          <Separator className="my-4 md:hidden" />
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-xl flex-initial">Resumo do Pedido</h3>
            <ScrollArea className="flex-1 ">
              <div className="h-full flex flex-col max-h-[650px] gap-2">
                {cartItems.map((item, i) => (
                  <ProductDetails
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
          </div>
          <Separator className="my-4 md:hidden" />
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex gap-2 items-center text-xl">
              <h3>Total pedido: </h3>
              <p className="font-medium">
                {totalCart.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </div>
            <div className="flex gap-2 items-center text-lg">
              <h3>Frete: </h3>
              <p className="font-medium">10,00</p>
            </div>

            <h3 className="text-xl">Forma de pagamento</h3>
            <RadioGroup
              value={formaPagamento}
              onValueChange={setFormaPagamento}
              className="flex flex-wrap gap-2"
            >
              <RadioGroupItem value="Pix" id="pix" />
              <label htmlFor="pix" className="ml-2">
                Pix
              </label>
              <RadioGroupItem value="Dinheiro" id="dinheiro" />
              <label htmlFor="dinheiro" className="ml-2">
                Dinheiro
              </label>
              <RadioGroupItem value="Cartao" id="cartao" />
              <label htmlFor="cartao" className="ml-2">
                Cartão
              </label>
            </RadioGroup>
            <Button onClick={handleConfirmPedido}>Confirmar pedido</Button>
          </div>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirmar pedido</DialogTitle>
            </DialogHeader>
            {cartItems.map((item, i) => (
              <ProductDetails
                key={i}
                id={item.id}
                photo_thumb={item.photo_thumb}
                name={item.name}
                qtd={item.qtd}
                price={item.price}
              />
            ))}
            <Button onClick={handleSubmit} loading={isPending}>
              Confirmar
            </Button>
            {isSuccess && (
              <p className="text-green-500 mt-1">
                Pedido realizado com sucesso!
              </p>
            )}
            {isError && (
              <p className="text-destructive mt-1">
                Erro ao efetuar pedido, tente novamente.
              </p>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Checkout;

// https://viacep.com.br/ws/09721000/json