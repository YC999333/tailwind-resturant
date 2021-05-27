import { useContext, useState } from "react";
import Context from "./Context/Context";

function Cart(props) {
  const context = useContext(Context);

  const [selected, setSelected] = useState({ orderOption: "hidden" });
  let total = 0;

  if (context.carts.length > 0) {
    context.carts.forEach(
      (cart) => (total = total + cart.quantity * cart.price)
    );
  } else total = 0;

  console.log(context);

  const onChange = (e) => {
    e.preventDefault();
    setSelected({ orderOption: e.target.value });
  };

  return (
    <div className="cart bg-white mx-auto border border-indigo-500 pt-4 px-1 md:px-2 my-3 rounded-lg">
      <div id="summary" className="w-full px-2 py-10">
        <h1 className="font-semibold text-center text-2xl border-b pb-8">
          Order Summary
        </h1>
        {context.carts.map((cart) => {
          return (
            <div
              key={cart.id}
              className="w-52 md:w-4/5 mx-auto items-center grid grid-cols-8 col-auto justify-between mt-10 mb-5"
            >
              <div className="font-semibold col-span-3 text-xs sm:text-sm md:text-md mr-3">
                <span>{cart.title}</span>
              </div>

              <div className="font-semibold text-center border rounded-lg hover:border-indigo-500">
                {/* {cart.quantity >= 1 ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(cart.id);
                      context.decrementQty(cart.id);
                    }}
                  >
                    <i className="ri-subtract-line md:text-base text-sm"></i>
                  </button>
                ) : null}

                {cart.quantity === 0 ? ( */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    context.removeItemFromCart(cart.id);
                  }}
                >
                  <i className="ri-subtract-line md:text-base text-sm"></i>
                </button>
                {/* ) : null} */}
              </div>

              <div className="m-2 rounded-lg text-center text-center text-sm lg:text-md hover:border-indigo-500">
                <p>{cart.quantity}</p>
              </div>
              <div className="font-semibold text-center border rounded-lg hover:border-indigo-500">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    context.incrementQty(cart);
                  }}
                >
                  <i className="ri-add-line md:text-base text-sm"></i>
                </button>
              </div>
              <span className="font-semibold mx-3 col-span-2 text-center text-xs sm:text-sm md:text-md">
                ${cart.price * cart.quantity}
              </span>
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
              name="address-1"
              type="text"
              className="border-b hover:border rounded-md border-gray-300 w-48 mr-1 sm:w-68 lg:w-5/6 mt-1"
            />
            <input
              name="address-2"
              type="text"
              className="border-b hover:border rounded-md  border-gray-300 w-48 mr-1 sm:w-68 lg:w-5/6 mt-1"
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
