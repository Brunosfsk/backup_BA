import './services/currency.js';
import './index.css';
import '@/i18n/i18n.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import { PrivateRoutesLogin } from '@/routes/privateRoutes';
import { AuthProvider } from './context/auth.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area.jsx';
import { ThemeProvider } from './context/theme.jsx';
import { MeUserProvider } from './context/meUser.jsx';
import { LoginProvider } from './context/login.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserConfig from './pages/Users/UserConfig/UserConfig.jsx';
import RecoveryPassword from './pages/Access/RecoveryPassword/RecoveryPassword.jsx';
import Login from './pages/Access/Login/Login.jsx';
import Sidebar from './components/template/Sidebar/Sidebar.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ResetPassword from './pages/Access/ResetPassword/ResetPassword.jsx';
import WhitelabelProvider from './context/whitelabel.jsx';
import ExamplePageType1 from './pages/ExamplePageType1.jsx';
import ExamplePageType2 from './pages/ExamplePageType2.jsx';
import ExamplePageType3 from './pages/ExamplePageType3.jsx';
import ExamplePageType6 from './pages/ExamplePageType6.jsx';
import ExamplePageType5 from './pages/ExamplePageType5.jsx';
import ExamplePageType4 from './pages/ExamplePageType4.jsx';
import { PrivateRoutesPermission } from './routes/PrivateRoutesPermission.jsx';
import Pipeline from './pages/CRM/pipeline/Pipeline.jsx';

const layout = () => {
  return (
    <div className="bg-background flex w-dvw relative">
      <Sidebar />
      <ScrollArea className="h-dvh flex-1 px-5">
        <Outlet />
      </ScrollArea>
    </div>
  );
};

const router = createBrowserRouter([
  {
    Component: PrivateRoutesLogin,
    children: [
      {
        path: '/',
        Component: layout,
        permanent: true,
        children: [
          {
            path: '*',
            element: <NotFoundPage />,
          },
          {
            path: '/',
            element: <Home />,
            permanent: true,
            errorElement: NotFoundPage,
          },
          {
            path: '/social-media',
            element: (
              <PrivateRoutesPermission requiredPermission="social-media">
                <ExamplePageType1 />
              </PrivateRoutesPermission>
            ),
            permanent: true,
            errorElement: NotFoundPage,
          },
          {
            path: '/crm/pipeline',
            element: <Pipeline />,
            permanent: true,
            errorElement: NotFoundPage,
            children: [
              {
                path: '/crm/pipeline/:IDPipeline',
                element: <Pipeline />,
                permanent: true,
                errorElement: NotFoundPage,
              },
            ],
          },
          {
            path: '/landing-pages',
            element: (
              <PrivateRoutesPermission requiredPermission="landing-pages">
                <ExamplePageType2 />
              </PrivateRoutesPermission>
            ),
            permanent: true,
            errorElement: NotFoundPage,
          },
          {
            path: '/campaigns',
            element: (
              <PrivateRoutesPermission requiredPermission="campaigns">
                <ExamplePageType3 />
              </PrivateRoutesPermission>
            ),
            permanent: true,
            errorElement: NotFoundPage,
          },
          {
            path: '/users',
            element: (
              <PrivateRoutesPermission requiredPermission="users">
                <ExamplePageType4 />
              </PrivateRoutesPermission>
            ),
            permanent: true,
            errorElement: NotFoundPage,
          },
          {
            path: '/activities',
            element: (
              <PrivateRoutesPermission requiredPermission="activities">
                <ExamplePageType5 />
              </PrivateRoutesPermission>
            ),
            permanent: true,
            errorElement: NotFoundPage,
          },
          {
            path: '/report',
            element: (
              <PrivateRoutesPermission requiredPermission="report">
                <ExamplePageType6 />
              </PrivateRoutesPermission>
            ),
            permanent: true,
            errorElement: NotFoundPage,
          },
          {
            path: 'user/config/:tab',
            element: <UserConfig />,
            permanent: true,
            errorElement: NotFoundPage,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: (
      <LoginProvider>
        <Login />
      </LoginProvider>
    ),
    permanent: true,
    errorElement: NotFoundPage,
  },
  {
    path: '/login/recovery/sendEmail',
    element: (
      <LoginProvider>
        <ResetPassword />
      </LoginProvider>
    ),
    permanent: true,
    errorElement: NotFoundPage,
  },
  {
    path: '/login/recovery/:token',
    element: (
      <LoginProvider>
        <RecoveryPassword />
      </LoginProvider>
    ),
    permanent: true,
    errorElement: NotFoundPage,
  },
  {
    path: '*',
    element: <NotFoundPage />,
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
      <WhitelabelProvider>
        <AuthProvider>
          <React.StrictMode>
            <MeUserProvider>
              <RouterProvider router={router} />
            </MeUserProvider>
          </React.StrictMode>
        </AuthProvider>
      </WhitelabelProvider>
    </QueryClientProvider>
  </ThemeProvider>,
);
