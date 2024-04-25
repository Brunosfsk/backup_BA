import Styled from 'styled-components'

export const BackgroundModal = Styled.div`
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(0, 0, 0, 0.7);
   position: fixed;
   overflow: none;
`;

export const ContainerModal = Styled.div`
   height: 100%;
   width: 30%;
   background-color: #fff;
   position: fixed;
   right: 0;
`;

export const ButtonModal = Styled.button`
   font-size: 12px;
   color: red;
   padding: 5px;
   position: fixed;
   top: 8px;
   right: 8px;
   background-color: transparent;
   border: none;

   &:hover {
    background-color: #C7C8CC;
    border-radius: 50%; 
    cursor-pointer;
  }

`;

export const TitleModal = Styled.p`
    font-size: 16px;
    margin-left: 15px;
    margin-top: 25px;
`;

export const ProductList = Styled.div`
    height: calc(100% - 200px);
    margin: 0 10px;
    overflow: auto;
`;

export const FooterCart = Styled.div`
    margin: 0 20px;
    border-top: 2px solid #e7e7e7;
`;

export const ValorTotal = Styled.div`
    display: flex;
    justify-content: space-between;

`;



