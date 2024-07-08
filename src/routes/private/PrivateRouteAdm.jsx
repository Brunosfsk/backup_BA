import { useContext } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

const PrivateRouteAdm = () => {
  const { id } = useContext(AuthContext);
  console.log(id);
  const { nameBussiness } = useParams();

  return !id ? <Navigate to={`/${nameBussiness}`} /> : <Outlet />;
};

export default PrivateRouteAdm;
