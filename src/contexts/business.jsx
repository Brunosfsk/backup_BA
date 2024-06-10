import { createContext } from 'react';
import localStorageManager from '../services/localStorageManager';
import { useParams } from 'react-router-dom';

export const BusinessContext = createContext();

const BusinessProvider = ({ children }) => {
  const { nameBussiness } = useParams();
  localStorageManager.setItem('@Business:name', nameBussiness);

  return (
    <BusinessContext.Provider value={{ nameBussiness }}>
      {children}
    </BusinessContext.Provider>
  );
};

export default BusinessProvider;
