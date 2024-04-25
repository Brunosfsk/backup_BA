import Styled from 'styled-components'
import hamburguer from '../../assets/hamburguer.png'

export const Box = Styled.div`
   border: 1px solid #E9E9E9;
   padding: 10px;
   display: flex;
   margin: 10px 20px;
   flex-direction: row;
   justify-content: space-between;
`;

export const ImgCart = Styled.div`
  background-image: url(${hamburguer}); 
  background-size: cover;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const TextNome = Styled.h3`
   margin: 10px 3px 0 0;
`;

export const Nome = Styled.h3`
   margin: 0;
`;

export const TextValor = Styled.p`
   color: #929292;
   font-size: 0.8rem;
   margin: 0 3px 10px 0;
`;

export const Valor = Styled.p`
   color: #929292;
   font-size: 0.8rem;
   margin: 0 3px;
`;

export const FooterCart = Styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const ButtonContador = Styled.button`
   border: 1px solid #cacaca;
   border-radius: 0;
   background-color: #fff;
   cursor: pointer;
`;

export const QtdProdutos = Styled.button`
   margin: 0 10px;
`;

export const BoxContagem = Styled.div`
   display: flex;
`;

export const TextPrice = Styled.div`
   color: #E84F3D;
   font-size: 0.9rem;
   font-weight: bold;
   line-height: 1rem;
   margin-left: 10px;
`;

export const DivRow = Styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   justify-content: cente;
`;

