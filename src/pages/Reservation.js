import { useEffect, useState } from "react";
import axios from "axios";

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [serverError, setServerError] = useState("");
  const [showAdd, setShowAdd] = useState("");

  useEffect(async () => {
    try {
      const response = await axios("http://localhost:5000/getReservations", {
        // const response = await axios(
        //   "https://lavuta-restaurant.herokuapp.com/getOrders",
        //   {
        headers: { "content-type": "application/json" },
        method: "GET",
      });

      if (response.status === 200) {
        setReservations(response.data.userReservations);
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
      {reservations.map((reservation) => {
        return (
          <div id="summary" className="w-full px-2 py-10">
            <h1 className="font-semibold text-center text-xl border-b pb-8">
              Reservation Number - {reservation._id}
            </h1>
            <div
              key={reservation._id}
              className="mx-auto items-center flex flex-col my-5"
            >
              <div className="text-sm w-full font-semibold py-2">
                <p>
                  {reservation.person} Persons: {reservation.adult} Adults -{" "}
                  {reservation.kid} Kids
                </p>
              </div>

              <div className="border-t w-full text-sm font-semibold py-2">
                <p>
                  Reserved at {reservation.time}, on {reservation.date}
                </p>
              </div>

              <div className="border-t w-full text-sm font-semibold py-2">
                <p>Name: {reservation.name}</p>
              </div>
              <div className="border-t w-full text-sm font-semibold py-2">
                <p>Phone: {reservation.phone}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reservations;
