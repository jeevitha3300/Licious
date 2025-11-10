import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem('cartItems');
      return storedCart ? JSON.parse(storedCart) : {};
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev[item.id];
      const updatedItem = existingItem
        ? { ...existingItem, quantity: existingItem.quantity + 1 }
        : { ...item, quantity: 1 ,  weight: item.weight || "Not specified",};
      return { ...prev, [item.id]: updatedItem };
    });
  };


  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const item = prev[itemId];
      if (!item) return prev;
      if (item.quantity === 1) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [itemId]: { ...item, quantity: item.quantity - 1 },
      };
    });
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => {
      const { [itemId]: _, ...rest } = prev;
      return rest;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  const calculateSubtotal = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.offerPrice * item.quantity ,
      0
    );
  };

  const getTotalQuantity = () => {
    return Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        clearCart, //  Added here
        calculateSubtotal,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


