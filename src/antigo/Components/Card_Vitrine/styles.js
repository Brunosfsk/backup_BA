import styled from 'styled-components';
import hamburguer from '../../assets/hamburguer.png';
import iconButton from '../../assets/bag-black.png';
// import { Theme } from '../../theme';

export const Title = styled.h1`
  color: #000;
  font-size: 25px;
`;

export const Description = styled.p`
  color: grey;
  font-size: 16px;
`;

export const Price = styled.h1`
  color: orange;
  font-size: 20px
`;

export const ProdutoBox = styled.div`
  border: 2px solid grey;
  border-radius: 18px;
  padding: 10px 10px 20px 10px;
  max-width: 230px;
  margin: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  min-width: 200px;
`;

export const ImageProduto = styled.div`
  background-image: url(${props => props.img}); 
  // background-image: url("https://img.freepik.com/fotos-gratis/tigre-olhando-com-a-boca-aberta_1150-18083.jpg?w=360&t=st=1707955850~exp=1707956450~hmac=5338fc5682ecf2d876f724e1ffc79e6d4ea3b9f776deb988d1d660939c32ed33"); 
  background-size: cover;
  width: 75px;
  height: 75px;
`;

export const IconButton = styled.div`
  background-image: url(${iconButton}); 
  background-size: cover;
  width: 18px;
  height: 15px;
  margin: 3px;
`;

export const Btn = styled.button`
  color: #fff;
  background-color: orange;
  border: none;
  padding: 5px 20px;
  border-radius: 3px;
  cursor: pointer;
`;

