import { useContext, useState } from "react";
import Context from "./Context/Context";
import TimePicker from "react-time-picker";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Cart(props) {
  const context = useContext(Context);
  const history = useHistory();
  const [serverError, setServerError] = useState("");
  const [value, onChange] = useState("10:00");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [selected, setSelected] = useState({ orderOption: "hidden" });
  let total = 0;

  if (context.carts.length > 0) {
    context.carts.forEach(
      (cart) => (total = total + cart.quantity * cart.price)
    );
  } else total = 0;

  const onSelectChange = (e) => {
    e.preventDefault();
    setSelected({ orderOption: e.target.value });
  };

  let address = `${address1}, ${address2}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    let { carts } = context;

    const data = JSON.stringify({
      total,
      carts,
      selected,
      address,
      value,
      name,
      phone,
    });

    try {
      const response = await axios("http://localhost:5000/postOrders", {
        // const response = await axios(
        //   "https://lavuta-restaurant.herokuapp.com/postOrders",
        //   {
        headers: { "content-type": "application/json" },
        method: "POST",
        data: data,
      });

      if (response.status === 200 || response.status === 201) {
        context.clearCart();
        history.push("/orders");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        setServerError(error.response.data.message);
      } else {
        console.log("Error", error.message);
      }
      console.log(error);
    }
  };

  return (
    <div className="cart bg-white py-2 mx-auto border border-indigo-500 pt-4 px-1 md:px-2 my-3 lg:px-4 rounded-lg">
      <form onSubmit={onSubmit}>
        <div id="summary" className="w-full px-2 py-10">
          <p className="bg bg-red-500 text-white text-lg text-center rounded-md m-2">
            {serverError}
          </p>
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
                  <span name="title">{cart.title}</span>
                </div>

                <div className="font-semibold text-center border rounded-lg hover:border-indigo-500">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      context.removeItemFromCart(cart.id);
                    }}
                  >
                    <i className="ri-subtract-line md:text-base text-sm"></i>
                  </button>
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
              onChange={onSelectChange}
              className="block p-2 text-gray-600 w-full text-sm"
            >
              <option value="hidden">Pick up</option>
              <option value="show">Delivery</option>
            </select>
          </div>

          <div className="flex-col border-b w-48 mr-1 sm:w-68 lg:w-5/6 mt-1">
            <label htmlFor="Address" className="text-sm mr-3">
              Your Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              name="name"
              type="text"
              className="hover:border w-full border-gray-300"
            />
          </div>
          <div className="border-b w-48 mr-1 sm:w-68 lg:w-5/6 mt-1">
            <label htmlFor="Address" className="text-sm mr-3">
              Your Phone
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              type="text"
              className="hover:border w-full border-gray-300"
            />
          </div>
          <div className={`${selected.orderOption} inline-block w-full mt-2`}>
            <label htmlFor="Address" className="text-sm mr-3">
              Your Address
            </label>
            <input
              onChange={(e) => setAddress1(e.target.value)}
              name="address-1"
              type="text"
              className="border-b hover:border border-gray-300 w-48 mr-1 sm:w-68 lg:w-5/6 mt-1"
            />
            <input
              onChange={(e) => setAddress2(e.target.value)}
              name="address-2"
              type="text"
              className="border-b hover:border border-gray-300 w-48 mr-1 sm:w-68 lg:w-5/6 mt-1"
            />
          </div>
          <div className="mx-2 mt-4 rounded-lg">
            <TimePicker onChange={onChange} value={value} />
          </div>
          <div className="flex font-semibold justify-between mx-2 py-6 text-sm md:text-lg uppercase">
            <span>Total cost</span>
            <span name="total">${total}</span>
          </div>
          <button className="bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cart;
