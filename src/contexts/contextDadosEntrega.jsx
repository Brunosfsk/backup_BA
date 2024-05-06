import { createContext, useState } from 'react';

export const DadosEntregaContext = createContext();

function ContextDadosEntrega(props) {
  const [dadosEntrega, setDadosEntrega] = useState([]);

  function addDados(item) {
    setDadosEntrega(item);
  }
  console.log(addDados);

  return (
    <DadosEntregaContext.Provider value={{ addDados }}>
      {props.children}
    </DadosEntregaContext.Provider>
  );
}

export default ContextDadosEntrega;
