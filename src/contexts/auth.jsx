import { createContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../services/api.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [id, setId] = useState(localStorage.getItem('@Auth:id'));
  const [email, setEmail] = useState(localStorage.getItem('@Auth:email'));
  const [error, setError] = useState(null);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const saveAuthData = ({ id, email , token}) => {
    setId(id);
    setEmail(email);
    localStorage.setItem('@Auth:id', id);
    localStorage.setItem('@Auth:email', email);
    localStorage.setItem('@Auth:token', token);
  };

  const handleAuthError = (err) => {
    setError(JSON.parse(err.request.response));
    setLoadingLogin(false);
  };

  const signIn = async ({ email, password }) => {
    setLoadingLogin(true);
    try {
      const res = await api.post('/auth', { email, password });
      saveAuthData(res.data);
      setError(null);
    } catch (err) {
      handleAuthError(err);
    } finally {
      setLoadingLogin(false);
    }
  };

  const signOut = () => {
    localStorage.clear();
    setId(null);
    setEmail(null);
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
