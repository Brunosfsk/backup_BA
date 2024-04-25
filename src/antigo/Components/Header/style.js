import styled from 'styled-components';
import logoBairroAtivo from '../../assets/logoBA.png';

export const LogoBairroAtivo = styled.div`
  background-image: url(${logoBairroAtivo}); 
  background-size: cover;
  width: 100px;
  height: 50px;
`;

export const Container = styled.div`
  display: flex;
  background-color: #EFECEC;
  width: 100%;
  height: 120px;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 6px 12px 6px #C7C8CC;
`;

export const Button_Sacola = styled.button`
  color: #fff;
  background-color: orange;
  border: none;
  padding: 5px 20px;
  border-radius: 3px;
  Cursor: pointer;
`;