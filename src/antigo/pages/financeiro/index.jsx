import React from 'react';
import *as Styled from './style';
import { Chart } from "react-google-charts";

export const data = [
  [
    "Vendas",
    "Refrigerantes",
    "Batata-frita",
    "Laches",
  ],
  [1, 37.8, 80.8, 41.8],
  [2, 30.9, 69.5, 32.4],
  [3, 25.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 11.9, 17.6, 10.4],
];

export const options = {
  chart: {
    title: "Resultado das vendas semanal",
    // subtitle: "in millions of dollars (USD)",
  },
};

 function Financeiro() {

  return (
    <Styled.ContainerGeral>
    <Styled.Top><h1>Financeiro</h1></Styled.Top>
    <Styled.ContainerBox>
    <Styled.BoxNumber>Total pedidos
        <Styled.Numbers>80</Styled.Numbers>
    </Styled.BoxNumber>
    <Styled.BoxNumber>Total vendas
    <Styled.Numbers>R$ 4.480,00</Styled.Numbers>
    </Styled.BoxNumber>
    <Styled.BoxNumber>Tickt médio
    <Styled.Numbers>R$ 56,00</Styled.Numbers>
    </Styled.BoxNumber>
    </Styled.ContainerBox>
    <Styled.ContainerBox2>
    <Styled.BoxNumber>Campeão de vendas
        <Styled.Numbers>120</Styled.Numbers>
    </Styled.BoxNumber>
    <Styled.BoxNumber>Cliente do mês
    <Styled.Numbers>:)</Styled.Numbers>
    </Styled.BoxNumber>
    <Styled.BoxNumber>Balanço
    <Styled.Numbers>6%</Styled.Numbers>
    </Styled.BoxNumber>
    </Styled.ContainerBox2>
    <Styled.graphic>
    <Chart
      chartType="Bar"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
    </Styled.graphic>
    </Styled.ContainerGeral>
  )
}



export default Financeiro;