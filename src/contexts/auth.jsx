import { createContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../services/api.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState(localStorage.getItem('@Auth:user'));
  const [error, setError] = useState(null);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const signIn = async ({ email, password }) => {
    await api
      .post('/auth', { email, password })
      .then((res) => {
        setLoadingLogin(false);
        setError('');
        setId(res.data.id);
        setEmail(res.data.email);
        localStorage.setItem('@Auth:id', res.data.id);
        localStorage.setItem('@Auth:email', res.data.email);
        setError(res.data);
      })
      .catch((err) => {
        setError(JSON.parse(err.request.response));
        setLoadingLogin(false);
      });
  };

  const signOut = () => {
    localStorage.clear();
    setId(null);
    return <Navigate to="/login" />;
  };

  return (
    <AuthContext.Provider
      value={{
        id,
        email,
        signed: !!id,
        signIn,
        signOut,
        error,
        loadingLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
