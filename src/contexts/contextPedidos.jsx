import { createContext, useState } from 'react';

export const PedidoContext = createContext();

function ContextPedidos(props) {
  const [pedido, setPedido] = useState([]);

  function addPedido(item) {
    setPedido(item);
    // console.log(pedido)
  }

  return (
    <PedidoContext.Provider value={{ addPedido }}>
      {props.children}
    </PedidoContext.Provider>
  );
}

export default ContextPedidos;
