import Styled from 'styled-components'

export const Container = Styled.div`
   background-color: #000000bf;
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   Position: absolute;
   z-index: 1000;
`;

export const BoxModal = Styled.div`
   background-color: #fff;
   border: 1px solid red;
   padding: 20px;
   display: flex;
   justify-content: center;
   flex-direction: column;
   width: 60%;
   position: absolute;
   overflow-y: visible;
`;

export const BoxInfoPedido = Styled.div`
    border: 1px solid black;
    
`;

export const BoxDadosEntrega = Styled.div`
    margin-top: 10px;
    border: 1px solid black;
`;

export const TitleModal = Styled.h1`
    color: red;
    font-size: 32px;
    font-wight: bold:
`;

