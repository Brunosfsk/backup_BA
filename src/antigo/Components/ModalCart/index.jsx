import React, { useContext, useEffect } from 'react';
import * as Styled from './style';
import { useState } from 'react';
import ButtonFinalizar from '../Buttons/ButtonFinalizar';
import ProductCart from '../ProductCard';
import { CartContext } from '../../contexts/contextCart'
// import { useEventEmitter } from "@reactuses/core";

function ModalCart({inOpen, setOpenModal}) {
  // const [event, fire, dispose] = useEventEmitter();

  // const [show, setShow] = useState(false)
  const {cartItems, totalCart} = useContext(CartContext);


  // useEffect(() => {
  //   let itemsProduct = cartItems.qtd
  //   let itemsPrice = cartItems.preco
  //   console.log(itemsProduct)
  //   console.log(cartItems)

  //   function SomarCart() {
  //     let total = itemsProduct*itemsPrice
  //     setTotalCart(total)
  //     console.log(total)
  //   }
  //   SomarCart()
  // }, [totalCart]);



//   useEffect( function(){
// window.addEventListener('openSidebar', function(){
//   setShow(true);
// });
// setCartItems(carrinho);
//   }, []);

   
  // useEffect(() => {
  //   useEventEmitter.addListener("openModal", nomeDisparador => {
  //     window.alert("Open")
  //     console.log("Modal aberto por "+  nomeDisparador);
  //     setOpenModal(true)
  //   });
  //   return () => {
  //     useEventEmitter.removeListener("openModal");
  //   };
  // }, []);


  if(inOpen){
    return (
       <Styled.BackgroundModal>
         <Styled.ContainerModal>
          <Styled.TitleModal>Carrinho de compras</Styled.TitleModal>
         <Styled.ButtonModal onClick={()=> setOpenModal(!inOpen)}>X</Styled.ButtonModal>
         <Styled.ProductList>
          {
              cartItems.map((item)=>{
                  return <ProductCart showBtn={true} 
                                      key={item.id}
                                      id={item.id}
                                      foto={item.foto}
                                      nome={item.nome}
                                      qtd={item.qtd}
                                      preco={item.preco}
                  />
              })
          }
         
         </Styled.ProductList>
         <Styled.FooterCart>
          <Styled.ValorTotal>
          <p>Total</p>
          <p>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(totalCart)}</p>
          </Styled.ValorTotal>
         <ButtonFinalizar/>
         </Styled.FooterCart>
         </Styled.ContainerModal>
       </Styled.BackgroundModal>
      
    )
  }
  return null
  
}

export default ModalCart;



// {new Intl.NumberFormat('pt-BR', 
//                         {style: 'currency', currency: 'BRL'}).format(totalCart)}


