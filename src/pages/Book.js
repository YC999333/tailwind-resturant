import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Book() {
  const history = useHistory();
  const [person, setPerson] = useState(0);
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 11)
  );
  const [serverError, setServerError] = useState("");
  const [adult, setAdult] = useState(1);
  const [kid, setKid] = useState(0);
  const [name, setName] = useState("Name");
  const [phone, setPhone] = useState("Phone");

  const date = startDate.toLocaleString().split(" ");
  const RDate = date[0].toString();
  const RTime = date[1].toString().replace(/(:\d{2}| [AP]M)$/, "");

  const onAdultChange = (e) => setAdult(e.target.value);

  const onKidChange = (e) => setKid(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      name,
      phone,
      person,
      adult,
      kid,
      RDate,
      RTime,
    });

    try {
      const response = await axios("http://localhost:5000/postReservations", {
        // const response = await axios(
        //   "https://lavuta-restaurant.herokuapp.com/postReservations",
        //   {
        headers: { "content-type": "application/json" },
        method: "POST",
        data: data,
      });

      if (response.status === 200 || response.status === 201) {
        history.push("/reservations");
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
    <div className="bg-gray-50 pb-20">
      <div>
        <img
          className="h-96 w-full object-cover"
          src="https://upload.cc/i1/2021/05/19/6aHiUp.jpg"
          alt="reserve"
        />
      </div>
      <form onSubmit={onSubmit}>
        <div className="flex justify-center">
          <div className="w-full sm:w-3/5 md:w-full p-4 bg-gray-50 items-center">
            <p className="text-2xl text-center md:text-3xl mt-8 md:mt-20 mb-20">
              Reservation at LaVuTa
            </p>
            <div className="text-base flex justify-center font-bold grid gap-6 md:gap-3 grid-cols-1 md:grid-cols-5">
              <div className="z-40 w-full relative text-left dropdown md:col-span-2">
                <span className="rounded-md shadow-sm">
                  <button
                    className="w-full px-4 py-2 text-md text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <span>
                      {person} Persons: {adult} Adults - {kid} Kids
                    </span>
                  </button>
                </span>
                <div className="opacity-0 w-full invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2">
                  <div className="z-50 p-7 w-full px-auto absolute border shadow-xl rounded-xl inline-block space-y-3 bg-white">
                    <div className="flex space-x-4 justify-between">
                      <div>Adults</div>
                      <div>
                        <input
                          className="w-16 rounded-lg border border-gray-200 "
                          type="number"
                          default="1"
                          min="1"
                          onChange={onAdultChange}
                          value={adult}
                        />
                      </div>
                    </div>
                    <div className="flex space-x-4 justify-between">
                      <div>Kids</div>
                      <div>
                        <input
                          className="w-16 rounded-lg border border-gray-200"
                          type="number"
                          default="1"
                          min="0"
                          onChange={onKidChange}
                          value={kid}
                        />
                      </div>
                    </div>
                    <div className="pt-4 mx-auto">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setPerson(+adult + +kid);
                        }}
                        className="block w-5/6 bg-blue-400 rounded-lg font-semibold text-sm text-white mt-4"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="z-30 text-left dropdown md:col-span-3 w-full">
                <span className="rounded-md shadow-sm">
                  <button
                    className="w-full px-4 py-2 text-md text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="trfue"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <span>
                      Book at {RTime} on {RDate}
                    </span>
                  </button>
                </span>
                <div className="border bg-white border-blue-500 opacity-0 dropdown-menu transition-all duration-300">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={startDate}
                    showTimeSelect
                    injectTimes={[
                      setHours(setMinutes(new Date(), 0), 11),

                      setHours(setMinutes(new Date(), 30), 20),
                    ]}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    popperModifiers={{
                      flip: {
                        behavior: ["bottom"], // don't allow it to flip to be above
                      },
                      preventOverflow: {
                        enabled: false, // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                      },
                      hide: {
                        enabled: false, // turn off since needs preventOverflow to be enabled
                      },
                    }}
                  />
                </div>
              </div>

              <div className="z-20 relative text-left dropdown w-full md:col-span-2">
                <span className="rounded-md shadow-sm">
                  <button
                    className="w-full px-4 py-2 text-md text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <span>{name}</span>
                  </button>
                </span>
                <div className="w-full opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2">
                  <div className="w-full p-7 px-auto absolute border shadow-xl rounded-xl inline-block space-y-3 bg-white">
                    <label htmlFor="Name" className="text-sm mr-3">
                      Your Name
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      type="text"
                      className="border-b w-full border-gray-300"
                    />
                  </div>
                </div>
              </div>

              <div className="z-10 relative text-left dropdown w-full md:col-span-2">
                <span className="rounded-md shadow-sm">
                  <button
                    className="w-full px-4 py-2 text-md text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <span>{phone}</span>
                  </button>
                </span>
                <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2">
                  <div className="w-full p-7 px-auto absolute border shadow-xl rounded-xl inline-block space-y-3 bg-white">
                    <label htmlFor="Phone" className="text-sm mr-3">
                      Your Phone
                    </label>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      name="phone"
                      type="text"
                      className="border-b w-full border-gray-300"
                    />
                  </div>
                </div>
              </div>

              <div className="relative text-left">
                <span className="rounded-md shadow-sm">
                  <button
                    className="justify-center w-full text-white bg bg-indigo-500 px-4 py-2 text-md text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="submit"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="headlessui-menu-items-117"
                  >
                    <span>Submit</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Book;
