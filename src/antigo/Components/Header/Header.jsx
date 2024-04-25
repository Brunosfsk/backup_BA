import React from 'react';
import * as Styled from './style';
import ButtonSacola from '../Buttons/ButtonSacola';
import { useState } from 'react';
import ModalCart from '../ModalCart';

function Header(props) {
  const [ openModal, setOpenModal ] = useState(false)

  function ok() {
    console.log("ok foii")
  }

  return (
      <Styled.Container>
        <Styled.LogoBairroAtivo/>
        <h2>{props.titleHeader}</h2>
        {/* <ButtonSacola onClick={()=> {setOpenModal(true)}}/> */}
        {

          props.showMenu ? 
          <div>
        {/* <ButtonSacola onClickOpen={ok}/> */}
        <Styled.Button_Sacola onClick={()=> setOpenModal(true)}>SACOLA</Styled.Button_Sacola>
        <ModalCart inOpen={openModal} setOpenModal={setOpenModal}/>
          </div>
        : null
        }
        
      </Styled.Container>
      
  );

  }
export default Header;