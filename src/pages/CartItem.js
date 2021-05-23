function CartItem({ cartItem, qty, removeItemFromCart }) {
  let total = 0;
  total = cartItem.price * qty;

  return (
    <div className="flex sm:flex-1 w-56 items-center justify-between mt-10 mb-5">
      <span className="font-semibold text-xs sm:text-sm uppercase">
        {cartItem.title}
      </span>
      <input
        type="number"
        min="1"
        className="border rounded-lg w-6 sm:w-10 text-xs sm:text-sm hover:border-indigo-500"
        default="1"
        value={qty}
      />
      <span className="font-semibold text-xs sm:text-sm">${total}</span>

      <button
        className="font-semibold text-sm border rounded-lg hover:border-indigo-500 w-6"
        onClick={() => removeItemFromCart(cartItem.id)}
      >
        -
      </button>
    </div>
  );
}

export default CartItem;
