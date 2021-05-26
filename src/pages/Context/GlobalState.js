import React, { useReducer } from "react";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_ALL_FROM_CART,
  INCREMENT_QTY,
  DECREMENT_QTY,
} from "./types";
import Reducer from "./Reducer";
import Context from "./Context";
import menu from "../../Data/menu";

function GlobalState(props) {
  const items = menu;

  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  const addItemToCart = (cartItem) => {
    dispatch({
      type: ADD_TO_CART,
      payload: cartItem,
    });
  };

  const removeItemFromCart = (cartItemId) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: cartItemId,
    });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_ALL_FROM_CART });
  };

  const incrementQty = (cartItem) => {
    dispatch({
      type: INCREMENT_QTY,
      payload: cartItem,
    });
  };

  const decrementQty = (cartId) => {
    dispatch({
      type: DECREMENT_QTY,
      payload: cartId,
    });
  };

  return (
    <Context.Provider
      value={{
        items,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        incrementQty,
        decrementQty,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default GlobalState;
