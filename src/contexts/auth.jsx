import { createContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../services/api.js';
import localStorageManager from '@/services/localStorageManager.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [id, setId] = useState(localStorageManager.getItem('@Auth:id'));
  const [email, setEmail] = useState(
    localStorageManager.getItem('@Auth:email'),
  );
  const [nameURL, setNameURL] = useState(
    localStorageManager.getItem('@Auth:name_url'),
  );
  const [type, setType] = useState(localStorageManager.getItem('@Auth:type'));
  const [error, setError] = useState(null);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const saveAuthData = ({ id, email, type, token, name_url }) => {
    setId(id);
    setEmail(email);
    setType(type);
    setNameURL(name_url);
    localStorageManager.setItem('@Auth:id', id);
    localStorageManager.setItem('@Auth:email', email);
    localStorageManager.setItem('@Auth:type', type);
    localStorageManager.setItem('@Auth:token', token);
    localStorageManager.setItem('@Auth:name_url', name_url);
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
    localStorageManager.clear();
    setId(null);
    setEmail(null);
    setType(null);
    return <Navigate to="/login" />;
  };

  return (
    <AuthContext.Provider
      value={{
        id,
        email,
        type,
        nameURL,
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
