import { createContext } from "react";

export default createContext({
  menuItems: [],
  carts: [],
  addItemToCart: (cartItem) => {},
  removeItemFromCart: (cartId) => {},
  clearCart: () => {},
  incrementQty: (cartItem) => {},
  decrementQty: (cartId) => {},
});
