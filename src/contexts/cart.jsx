import { createContext, useState } from 'react';
import localStorageManager from '../services/localStorageManager';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorageManager.getItem('@Cart:items') || [],
  );
  const [totalCart, setTotalCart] = useState(
    localStorageManager.getItem('@Cart:total') || 0,
  );

  const addItemCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, qtd: i.qtd + 1 } : i,
        );
      }
      return [...prevItems, item];
    });
    localStorageManager.setItem('@Cart:items', cartItems);
    setTotalCart((prevTotal) => Number(prevTotal) + Number(item.price));
    localStorageManager.setItem('@Cart:total', totalCart);
  };

  const removeItemCart = (itemId) => {
    setCartItems((prevItems) => {
      const item = prevItems.find((i) => i.id === itemId);
      if (item.qtd > 1) {
        return prevItems.map((i) =>
          i.id === itemId ? { ...i, qtd: i.qtd - 1 } : i,
        );
      }
      return prevItems.filter((i) => i.id !== itemId);
    });
    localStorageManager.setItem('@Cart:items', cartItems);
    setTotalCart((prevTotal) => {
      const item = cartItems.find((i) => i.id === itemId);
      return Number(prevTotal) - Number(item.price);
    });
    localStorageManager.setItem('@Cart:total', totalCart);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, totalCart, addItemCart, removeItemCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
