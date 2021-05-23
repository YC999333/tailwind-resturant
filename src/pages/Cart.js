import CartItem from "./CartItem";

function Cart({ carts, removeItemFromCart, clearCart }) {
  return (
    <div className="overflow-y-auto bg-white p-2 m-10 shadow-lg rounded-lg">
      <div id="summary" className="w-full px-4 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        {carts.map((cart) => {
          return (
            <CartItem
              cartItem={cart.item}
              qty={cart.quantity}
              removeItemFromCart={removeItemFromCart}
              clearCart={clearCart}
            />
          );
        })}

        <div className="border-t">
          <label className="font-medium inline-block mt-5 mb-2 text-sm uppercase">
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
