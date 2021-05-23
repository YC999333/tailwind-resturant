import { useState } from "react";

function CartItem({ cartItem, qty, removeItemFromCart }) {
  const [value, setValue] = useState(1);
  let total = 0;
  total = cartItem.price * value;

  return (
    <div className="flex flex-1 w-52 md:w-4/5 mx-auto items-center justify-between mt-10 mb-5">
      <span className="font-semibold text-sm md:text-lg mr-3 w-28">
        {cartItem.title}
      </span>
      <input
        type="number"
        min="1"
        className="border rounded-lg w-8 sm:w-10 text-center text-sm lg:text-md hover:border-indigo-500"
        default={qty}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <span className="font-semibold mx-3 w-20 text-center text-sm md:text-lg">
        ${total}
      </span>

      <button
        className="font-semibold w-8 lg:w-12 border rounded-lg hover:border-indigo-500 w-6"
        onClick={() => removeItemFromCart(cartItem.id)}
      >
        <i className="lg:text-base text-sm fas fa-minus"></i>
      </button>
    </div>
  );
}

export default CartItem;
