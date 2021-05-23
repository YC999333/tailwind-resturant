import React, { useReducer } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";
import Reducer from "./Reducer";
import Context from "./Context";
import menu from "../../Data/menu";

function GlobalState(props) {
  const items = menu;

  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  const addItemToCart = (item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };

  const removeItemFromCart = (itemId) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: itemId,
    });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_ALL_FROM_CART });
  };

  return (
    <Context.Provider
      value={{
        items,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default GlobalState;
