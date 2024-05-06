import { createContext, useState } from 'react';

export const DeliveryDetailsContext = createContext();

function deliveryDetailsProvider(props) {
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

export default deliveryDetailsProvider;
