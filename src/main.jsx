import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import { AuthProvider } from './contexts/auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartProvider from './contexts/cart';
import CadastroProspcts from './pages/cadastroProspcts/CadastroProspcts';
import Dashboard from './pages/Dashboard/Dashboard';
import Representantes from './pages/Representantes/Representantes';
import Login from './pages/Acess/login/Login.jsx';
import SignUp from './pages/Acess/signUp/SignUp.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PrivateRouteAdm from './routes/private/PrivateRouteAdm.jsx';
import NotFound from './pages/NotFound.jsx';
import BusinessProvider from './contexts/business.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';

const router = createBrowserRouter([
  {
    path: '/:nameBussiness',
    element: (
      <BusinessProvider>
        <Home />
      </BusinessProvider>
    ),
  },
  {
    path: '/:nameBussiness/login',
    element: (
      <BusinessProvider>
        <Login />
      </BusinessProvider>
    ),
  },
  {
    path: '/:nameBussiness/cadastrar',
    element: (
      <BusinessProvider>
        <SignUp />
      </BusinessProvider>
    ),
  },
  {
    path: '/:nameBussiness/checkout',
    element: <Checkout />,
  },
  {
    element: (
      <BusinessProvider>
        <PrivateRouteAdm />
      </BusinessProvider>
    ),
    children: [
      {
        path: '/cadastro-prospcts',
        element: (
          <BusinessProvider>
            <CadastroProspcts />
          </BusinessProvider>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <BusinessProvider>
            <Dashboard />
          </BusinessProvider>
        ),
      },
      {
        path: '/representantes',
        element: (
          <BusinessProvider>
            <Representantes />
          </BusinessProvider>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <BusinessProvider>
        <NotFound />
      </BusinessProvider>
    ),
  },
]);

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <AuthProvider>
      <React.StrictMode>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </React.StrictMode>
    </AuthProvider>
  </QueryClientProvider>,
);
