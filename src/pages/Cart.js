import CartItem from "./CartItem";
import { useContext } from "react";
import Context from "./Context/Context";

function Cart({ carts }) {
  const context = useContext(Context);

  return (
    <div className="bg-white mx-auto border border-indigo-500 pt-4 px-4 md:px-2 my-3 rounded-lg">
      <div id="summary" className="w-full px-2 py-10">
        <h1 className="font-semibold text-center text-2xl border-b pb-8">
          Order Summary
        </h1>
        {carts.map((cart) => {
          return (
            <CartItem
              cartItem={cart.item}
              qty={cart.quantity}
              removeItemFromCart={context.removeItemFromCart}
            />
          );
        })}

        <div className="border-t">
          <label className="font-medium inline-block mt-5 mb-2 text-sm">
            Pick up or Delivery?
          </label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Pick up</option>
            <option>Delivery</option>
          </select>
        </div>

        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <button className="bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
