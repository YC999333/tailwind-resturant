import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";

const addItemToCart = (state, item) => {
  const copy = [...state.carts];
  const currItemIndex = copy.findIndex((i) => i.item.id === item.id);

  if (currItemIndex < 0) {
    copy.push({ item, quantity: 1 });
  } else {
    const copyItem = { ...copy[currItemIndex] };
    copyItem.quantity++;
    copy[currItemIndex] = copyItem;
  }

  return { ...state, carts: copy };
};

const removeItemFromCart = (state, itemId) => {
  const copy = [...state.carts];
  const currItemIndex = copy.findIndex((i) => i.item.id === itemId);

  const currItem = { ...copy[currItemIndex] };
  currItem.quantity--;

  if (currItem.quantity <= 0) {
    copy.splice(currItem, 1);
  } else {
    copy[currItemIndex] = currItem;
  }

  return { ...state, carts: copy };
};

const clearCart = (state) => {
  return { ...state, carts: [] };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addItemToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return removeItemFromCart(state, action.payload);
    case CLEAR_ALL_FROM_CART:
      return clearCart(state);
    default:
      return state;
  }
};
