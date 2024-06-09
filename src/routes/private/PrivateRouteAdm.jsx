import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

const PrivateRouteAdm = ({ children }) => {
  const { id } = useContext(AuthContext);

  return !id ? <Navigate to="/" /> : children;
};

export default PrivateRouteAdm;
