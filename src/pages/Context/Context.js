import { createContext } from "react";

export default createContext({
  menuItems: [],
  carts: [],
  addItemToCart: (menuItem) => {},
  removeItemFromCart: (itemId) => {},
  clearCart: () => {},
});
