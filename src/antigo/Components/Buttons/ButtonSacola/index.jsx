import React from 'react';
import * as Styled from './styles'
import { useEventEmitter } from "@reactuses/core";



function ButtonSacola(onClickOpen) {

  return (
      <div>
<Styled.Button_Sacola onClick={onClickOpen}>Sacola</Styled.Button_Sacola>

{/* <Styled.Button_Sacola onClick={() => {
          useEventEmitter.emit("openModal", "Button Sacola");
          }}>Sacola</Styled.Button_Sacola> */}

        {/* <Styled.Button_Sacola onClick={onClick}>Sacola</Styled.Button_Sacola> */}
      </div>
  );

  }
export default ButtonSacola;