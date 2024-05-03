import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CartProvider from '../src/contexts/contextCart'
// import Home from './Home/Home'
import Rotas from './rotas'
import { useContext } from 'react';

// const CartContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <div>
        
        </div> */}
            <CartProvider>
                <Rotas />
            </CartProvider>
        
    </React.StrictMode>,
)