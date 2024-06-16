import { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

const PrivateRouteAdm = ({ children }) => {
  const { id } = useContext(AuthContext);
  const { nameBussiness } = useParams();

  return !id ? <Navigate to={`/${nameBussiness}`} /> : children;
};

export default PrivateRouteAdm;
