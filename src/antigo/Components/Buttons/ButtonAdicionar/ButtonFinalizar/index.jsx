import React from 'react';
import * as Styled from './styles'
import { useNavigate } from 'react-router-dom';

function ButtonFinalizar() {
  const navigate = useNavigate();

  function pageCheckout(){
    navigate('/checkout');
  }

  return (
      <div>
        <Styled.Butu onClick={pageCheckout}>Finalizar compra</Styled.Butu>
      </div>
  );

  }
export default ButtonFinalizar;