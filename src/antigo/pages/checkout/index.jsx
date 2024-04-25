import React, { useContext, useState } from 'react';
import *as Styled from './style'
import Header from '../../Components/Header/Header';
import ModalFinalizarPedido from '../../Components/ModalConfirmarPedido';
import { CartContext } from '../../contexts/contextCart';
import { ContextDadosEntrega } from '../../contexts/contextDadosEntrega';
import ButtonConfirmar from '../../Components/Buttons/ButtonConfirmar';
import { useForm } from "react-hook-form"


function Checkout() {

  // const {addDados} = useContext(ContextDadosEntrega);
  const { totalCart, cartItems } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(true);
  console.log(cartItems)
  const [todosDados, setTodosDados] = useState([])
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => console.log(`data = ${data}`)


  function todosDadosPedidos() {

  };

  // function SendDados() {

  //   const item = {
  //     nome: nome, 
  //   }
  //   AddDadosEntrega(item);
  // }

  return (
    <Styled.Container>
      <Header showMenu={false} titleHeader="Dados do Pedido" />
      <h1>Finalizar Pedido</h1>
      {/* <Styled.Column onSubmit={onSubmit}> */}
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.GridContainer >
          <Styled.Column>
            <h3>Dados Pessoais</h3>
            <Styled.InputPedido {...register("NomeCompleto")}
              type="text"
              placeholder="Nome completo"
              name="nome"
            />
            <Styled.InputPedido {...register("Email")}
              type="text"
              placeholder="E-mail"

            />
            <Styled.InputPedido {...register("Telefone/WhatsApp")}
              type="text"
              placeholder="Telefone(whatsapp)"

            />
          </Styled.Column>

          <Styled.Column>
            <h3>Endereço para Entrega</h3>
            <Styled.InputPedido {...register("Rua")}
              type="text"
              placeholder="Rua"

            />

            <Styled.InputPedido {...register("Cep")}
              type="text"
              placeholder="CEP"

            />

            <Styled.InputPedido {...register("Bairro")}
              type="text"
              placeholder="Bairro"

            />
            <Styled.InputPedido {...register("Cidade")}
              type="text"
              placeholder="Cidade"

            />
          </Styled.Column>

          {/* <Styled.Column onSubmit={onSubmit}> */}
          <Styled.Column>
            <h3>Total a cobrar</h3>
            <p><strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalCart)}</strong></p>
            {/* <p>{cartItems[1].nome}</p> */}
            <Styled.InputPedido
              type="radio"
              placeholder="Forma de pagamento"
              name="pagamento"
            />
            <label>Pix</label>

            <Styled.InputPedido
              type="radio"
              placeholder="Forma de pagamento"
              name="pagamento"
            />
            <label>Dinheiro</label>

            <Styled.InputPedido
              type="radio"
              placeholder="Forma de pagamento"
              name="pagamento"
            />
            <label>Cartão</label>


            <Styled.InputPedido
              type="text"
              placeholder="Total"

            />

            <input type="submit" />
            <ButtonConfirmar onClick={() => setOpenModal(true)} />
          </Styled.Column>
        </Styled.GridContainer>
      </Styled.Form>
      <ModalFinalizarPedido isOpen={openModal} />
    </Styled.Container>
  );
};

export default Checkout;



