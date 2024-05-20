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
