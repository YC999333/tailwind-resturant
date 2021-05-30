import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [serverError, setServerError] = useState("");
  const [showAdd, setShowAdd] = useState("");

  useEffect(async () => {
    try {
      const response = await axios("http://localhost:5000/getOrders", {
        // const response = await axios(
        //   "https://lavuta-restaurant.herokuapp.com/getOrders",
        //   {
        headers: { "content-type": "application/json" },
        method: "GET",
      });

      if (response.status === 200) {
        setOrders(response.data.userOrders);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        setServerError(error.response.data.message);
      }
      console.log(error);
    }
  }, []);

  return (
    <div className="bg-white flex flex-col mx-auto md:w-1/2 lg:w-2/5 flex justify-center p-8">
      {serverError ? (
        <p className="text-center text-red-500 text-xl">{serverError}</p>
      ) : null}
      {orders.map((order) => {
        return (
          <div id="summary" className="w-full px-2 py-10">
            <h1 className="font-semibold text-center text-xl border-b pb-8">
              Order Number - {order._id}
            </h1>
            {order.carts.map((cart) => {
              return (
                <div
                  key={cart.id}
                  className="mx-auto items-center flex grid grid-cols-3 col-auto justify-between my-5"
                >
                  <div className="font-semibold text-sm md:text-md mr-3">
                    <span>{cart.title}</span>
                  </div>

                  <div className="m-2 rounded-lg text-center text-center text-sm lg:text-md hover:border-indigo-500">
                    <p>{cart.quantity}</p>
                  </div>

                  <span className="font-semibold mx-3 text-center text-sm md:text-md">
                    ${cart.price * cart.quantity}
                  </span>
                </div>
              );
            })}

            <div className="border-t text-sm font-semibold py-2">
              <p>Method: {order.orderMethod}</p>
            </div>

            <div className="border-t text-sm font-semibold py-2">
              <p>
                Time: {""} {order.time}
              </p>
            </div>
            <div className="border-t text-sm font-semibold py-2">
              <p>Name: {order.name}</p>
            </div>
            <div className="border-t text-sm font-semibold py-2">
              <p>Phone: {order.phone}</p>
            </div>
            {order.orderMethod === "Delivery" ? (
              <div className="border-t text-sm font-semibold py-2">
                <p>Delivery Address: {order.address}</p>
              </div>
            ) : null}

            <div className="border-t mt-4">
              <div className="mx-auto items-center text-md font-semibold flex grid grid-cols-3 col-auto justify-between my-5 uppercase">
                <span>Total cost</span>
                <span></span>
                <span className="text-center">${order.total}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
