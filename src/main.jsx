import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import { AuthProvider } from './contexts/auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Checkout from './pages/Checkout/Checkout.jsx';
import CartProvider from './contexts/cart';
import CadastroProspcts from './pages/cadastroProspcts/CadastroProspcts';
import Dashboard from './pages/Dashboard/Dashboard';
import Representantes from './pages/Representantes/Representantes';
import Login from './pages/Acess/login/Login.jsx';
import SignUp from './pages/Acess/signUp/SignUp.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PrivateRouteAdm from './routes/private/PrivateRouteAdm.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/:idBusiness',
    element: <Home />,
  },
  {
    path: '/:idBusiness/login',
    element: <Login />,
  },
  {
    path: '/:idBusiness/cadastrar',
    element: <SignUp />,
  },
  // {
  //   path: '/checkout',
  //   element: <Checkout />,
  // },
  {
    element: <PrivateRouteAdm />,
    children: [
      {
        path: '/:idBusiness/cadastro-prospcts',
        element: <CadastroProspcts />,
      },
      {
        path: '/:idBusiness/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/:idBusiness/representantes',
        element: <Representantes />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
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
