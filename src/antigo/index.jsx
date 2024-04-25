import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './rotas'
import "./style/global.css"
// import { CartProvider } from './contexts/contextCart';
// import { ContextDadosEntrega } from './contexts/contextDadosEntrega';
// import { ContextPedidos } from './contexts/contextPedidos';
import { AuthProvider } from './contexts/auth';
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  
);

// root.render(
//   <AuthProvider>
//     <CartProvider>
//       <ContextPedidos>
//         <Rotas />
//       </ContextPedidos>
//     </CartProvider>
//   </AuthProvider>

// );