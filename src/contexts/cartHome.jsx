import { createContext, useState } from 'react';
import localStorageManager from '../services/localStorageManager';
import { Outlet } from 'react-router-dom';

export const CartHomeContext = createContext();

const CartHomeProvider = () => {
  const [cartItems, setCartItems] = useState(
    localStorageManager.getItem('@CartHome:items') || [],
  );
  const [totalCart, setTotalCart] = useState(
    localStorageManager.getItem('@CartHome:total') || 0,
  );

  const removeAllItems = () => {
    setCartItems([]);
    localStorageManager.removeItem('@CartHome:items');
    setTotalCart(0);
    localStorageManager.removeItem('@CartHome:total');
  }

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
    localStorageManager.setItem('@CartHome:items', cartItems);
    setTotalCart((prevTotal) => Number(prevTotal) + Number(item.price));
    localStorageManager.setItem('@CartHome:total', totalCart);
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
    localStorageManager.setItem('@CartHome:items', cartItems);
    setTotalCart((prevTotal) => {
      const item = cartItems.find((i) => i.id === itemId);
      return Number(prevTotal) - Number(item.price);
    });
    localStorageManager.setItem('@CartHome:total', totalCart);
  };

  return (
    <CartHomeContext.Provider
      value={{ cartItems, totalCart, addItemCart, removeItemCart, removeAllItems }}
    >
      <Outlet />
    </CartHomeContext.Provider>
  );
};

export default CartHomeProvider;
