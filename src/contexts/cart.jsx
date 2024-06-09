import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  console.log(cartItems);

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
    setTotalCart((prevTotal) => Number(prevTotal) + Number(item.price));
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
    setTotalCart((prevTotal) => {
      const item = cartItems.find((i) => i.id === itemId);
      return Number(prevTotal) - Number(item.price);
    });
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
