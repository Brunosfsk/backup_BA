import { createContext, useState } from 'react';

export const DeliveryDetailsContext = createContext();

const DeliveryDetailsProvider = ({ children }) => {
  const [deliveryDetails, setDeliveryDetails] = useState({
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
  });

  const updateDeliveryDetails = (details) => {
    setDeliveryDetails(details);
  };

  return (
    <DeliveryDetailsContext.Provider
      value={{ deliveryDetails, updateDeliveryDetails }}
    >
      {children}
    </DeliveryDetailsContext.Provider>
  );
};

export default DeliveryDetailsProvider;
