import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import { AuthProvider } from './contexts/auth';
import SignUp from './pages/signUp/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Checkout from './pages/Checkout/Checkout';
import CartProvider from './contexts/cart';
import CadastroProspcts from './pages/cadastroProspcts/CadastroProspcts';
import Dashboard from './pages/Dashboard/Dashboard';
import Representantes from './pages/Representantes/Representantes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },  
  {
    path: '/cadastrar',
    element: <SignUp />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/cadastro-prospcts',
    element: <CadastroProspcts/>,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
  },
  {
    path: '/representantes',
    element: <Representantes/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </React.StrictMode>
  </AuthProvider>,
);
