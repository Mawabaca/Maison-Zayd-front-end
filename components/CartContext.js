import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  // Charge les produits du panier depuis le localStorage au montage
  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')));
    }
  }, [ls]);
  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartProducts));
    } else {
      ls?.removeItem('cart');
    }
  }, [cartProducts, ls]);
  function addProduct(productId) {
    setCartProducts(prev => [...prev, productId]);
  }
  function removeProduct(productId) {
    setCartProducts(prev => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        const newCart = [...prev];
        newCart.splice(pos, 1);
        return newCart;
      }
      return prev;
    });
  }
  function clearCart() {
    setCartProducts([]);
  }
  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}