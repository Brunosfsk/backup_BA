import { createContext, useState } from 'react';

export const OrdersContext = createContext();

function OrdersProvider(props) {
  const [pedido, setPedido] = useState([]);

  function addPedido(item) {
    setPedido(item);
  }

  return (
    <PedidoContext.Provider value={{ addPedido }}>
      {props.children}
    </PedidoContext.Provider>
  );
}

export default OrdersProvider;
