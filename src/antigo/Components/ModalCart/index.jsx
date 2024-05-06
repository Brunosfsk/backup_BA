import React, { useContext, useEffect } from 'react';
import * as Styled from './style';
import { useState } from 'react';
import ButtonFinalizar from '../Buttons/ButtonFinalizar';
import ProductCart from '../ProductCard';
import { CartContext } from '../../contexts/contextCart'


export default function ProductCart(props) {
  const { AddItemCart, RemoveItemCart } = useContext(CartContext);

  function AddItem() {
    const item = {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      foto: props.foto,
      qtd: 1
    };
    AddItemCart(item);
  }

  function RemoveItem() {
    RemoveItemCart(props.id);
  }

  const totalItem = props.preco * props.qtd;

  return (
    <div className="border border-gray-200 p-4 flex justify-between items-center m-2">
      {props.showBtn ? (
        <div className="flex items-center">
          <div className="w-12 h-12 bg-cover bg-center mr-4" style={{ backgroundImage: `url(${hamburguer})` }} />
          <div>
            <h3 className="font-bold text-lg">{props.nome}</h3>
            <p className="text-gray-500">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.preco)}</p>
            <div className="flex items-center mt-2">
              <button className="border border-gray-300 rounded-md p-1 mr-2" onClick={RemoveItem}>-</button>
              <p>{props.qtd}</p>
              <button className="border border-gray-300 rounded-md p-1 ml-2" onClick={AddItem}>+</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <p>{props.qtd}</p>
          <div className="w-12 h-12 bg-cover bg-center mr-4" style={{ backgroundImage: `url(${hamburguer})` }} />
          <div>
            <h3 className="font-bold text-lg">{props.nome}</h3>
            <div className="flex justify-between">
              <p className="text-gray-500">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalItem)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



               


