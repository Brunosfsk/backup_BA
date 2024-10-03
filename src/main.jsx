import './index.css';
import './services/currency.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home.jsx';
import { AuthProvider } from './contexts/auth.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartProvider from './contexts/cart.jsx';
import CadastroProspcts from './pages/cadastroProspcts/CadastroProspcts.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Representantes from './pages/Representantes/Representantes.jsx';
import Login from './pages/Acess/login/Login.jsx';
import SignUp from './pages/Acess/signUp/SignUp.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PrivateRouteAdm from './routes/private/PrivateRouteAdm.jsx';
import NotFound from './pages/NotFound.jsx';
import BusinessProvider from './contexts/business.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import Stores from './pages/Dashboard/Stores/Stores.jsx';
import Promocoes from './pages/Promocoes/Body/Promocoes.jsx';
import Relatorios from './pages/Relatorios/Relatorios.jsx';
import LayoutADM from './pages/layouts/LayoutADM.jsx';
import Configuracoes from './pages/Configuracoes/Configuracoes.jsx';
import { ThemeProvider } from './contexts/theme';
import Cart from './pages/Cart/Cart';

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
    path: '/login',
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
    path: '/:nameBussiness/promocoes',
    element: (
      <BusinessProvider>
        <Promocoes />
      </BusinessProvider>
    ),
  },
  {
    path: '/:nameBussiness/carrinho',
    element: (
      <CartProvider>
        <Cart />
      </CartProvider>
    ),
  },
  {
    path: '/:nameBussiness/checkout',
    element: <Checkout />,
  },
  {
    element: <PrivateRouteAdm />,
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
        path: '/:nameBussiness/produtos',
        element: (
          <BusinessProvider>
            <LayoutADM>
              <Stores />
            </LayoutADM>
          </BusinessProvider>
        ),
      },
      {
        path: '/:nameBussiness/representantes',
        element: (
          <BusinessProvider>
            <Representantes />
          </BusinessProvider>
        ),
      },
      {
        path: '/:nameBussiness/representantes',
        // element: <Representantes />
        element: (
          <BusinessProvider>
            <Representantes />
          </BusinessProvider>
        ),
      },
      {
        path: '/:nameBussiness/relatorios',
        element: (
          <BusinessProvider>
            <Relatorios />
          </BusinessProvider>
        ),
      },
      {
        path: '/:nameBussiness/cadastro-prospcts',
        element: (
          <BusinessProvider>
            <CadastroProspcts />
          </BusinessProvider>
        ),
      },
      {
        path: '/:nameBussiness/dashboard',
        element: (
          <BusinessProvider>
            <LayoutADM>
              <Dashboard />
            </LayoutADM>
          </BusinessProvider>
        ),
      },
      {
        path: '/:nameBussiness/configuracoes',
        element: (
          <BusinessProvider>
            <LayoutADM>
              <Configuracoes />
            </LayoutADM>
          </BusinessProvider>
        ),
      },
    ],
  },
  {
    element: (
      <BusinessProvider>
        <PrivateRouteAdm />
      </BusinessProvider>
    ),
    // children: [
    //   {
    //     path: '/cadastro-prospcts',
    //     element: (
    //       <BusinessProvider>
    //         <CadastroProspcts />
    //       </BusinessProvider>
    //     ),
    //   },

    // ],
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
  <ThemeProvider>
    <QueryClientProvider client={client}>
      <AuthProvider>
        <React.StrictMode>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </React.StrictMode>
      </AuthProvider>
    </QueryClientProvider>
  </ThemeProvider>,
);
