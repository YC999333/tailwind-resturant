import { useContext, useState } from "react";
import Context from "./Context/Context";

function Cart() {
  const context = useContext(Context);
  const [value, setValue] = useState(1);
  const [selected, setSelected] = useState({ orderOption: "hidden" });

  const getQty = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const onChange = (e) => {
    e.preventDefault();
    setSelected({ orderOption: e.target.value });
    console.log(selected.orderOption);
  };

  let total = 0;
  context.carts.forEach((cart) => {
    total = total + cart.item.price * cart.quantity;
  });

  return (
    <div className="bg-white mx-auto border border-indigo-500 pt-4 px-4 md:px-2 my-3 rounded-lg">
      <div id="summary" className="w-full px-2 py-10">
        <h1 className="font-semibold text-center text-2xl border-b pb-8">
          Order Summary
        </h1>
        {context.carts.map((cart) => {
          return (
            <div
              key={cart.item.id}
              className="flex flex-1 w-52 md:w-4/5 mx-auto items-center justify-between mt-10 mb-5"
            >
              <span className="font-semibold text-sm md:text-lg mr-3 w-28">
                {cart.item.title}
              </span>
              <input
                type="number"
                min="1"
                className="border rounded-lg w-8 sm:w-10 text-center text-sm lg:text-md hover:border-indigo-500"
                default={cart.quantity}
                onChange={getQty}
                value={value}
              />
              <span className="font-semibold mx-3 w-20 text-center text-sm md:text-lg">
                ${cart.item.price * value}
              </span>

              <button
                className="font-semibold w-8 lg:w-12 border rounded-lg hover:border-indigo-500 w-6"
                onClick={() => context.removeItemFromCart(cart.item.id)}
              >
                <i className="lg:text-base text-sm fas fa-minus"></i>
              </button>
            </div>
          );
        })}

        <div className="border-t py-8">
          <label className="font-medium inline-block mt-5 mb-2 text-sm">
            Pick up or Delivery?
          </label>
          <select
            onChange={onChange}
            className="block p-2 text-gray-600 w-full text-sm"
          >
            <option value="hidden">Pick up</option>
            <option value="show">Delivery</option>
          </select>
          <div className={`${selected.orderOption} inline-block w-full mt-2`}>
            <label htmlFor="Address" className="text-sm mr-3">
              Your Address
            </label>
            <input
              type="text"
              className="hover:border rounded-md border-gray-300 w-56 mr-1 sm:w-68 lg:w-4/6 mt-1"
            />
          </div>
        </div>
        <div className="border-t mt-4">
          <div className="flex font-semibold justify-between py-6 text-sm md:text-lg uppercase">
            <span>Total cost</span>
            <span>${total}</span>
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
