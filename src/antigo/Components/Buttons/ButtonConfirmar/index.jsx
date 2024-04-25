import React from 'react';
import * as Styled from './styles'

function ButtonConfirmar({onClick}) {


  return (
      <div>
        <Styled.Butu onClick={onClick}>Confirmar Pedido</Styled.Butu>
      </div>
  );

  }
export default ButtonConfirmar;