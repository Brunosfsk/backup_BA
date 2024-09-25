import { createContext } from 'react';
import localStorageManager from '../services/localStorageManager';
import { useParams } from 'react-router-dom';
import { useBusinessGET } from '@/hooks/bussiness/useBusinessGET';

export const BusinessContext = createContext();

const BusinessProvider = ({ children }) => {
  const { nameBussiness } = useParams();
  localStorageManager.setItem('@Business:name', nameBussiness);
  const { data } = useBusinessGET(nameBussiness);

  data &&
    Object.keys(data[0]).map((item) => {
      localStorageManager.setItem('@Business:' + item, data[0][item]);
    });

  return (
    <BusinessContext.Provider value={{ ...(data && data[0]) }}>
      {children}
    </BusinessContext.Provider>
  );
};

export default BusinessProvider;
