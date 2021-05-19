import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Book() {
  const [person, setPerson] = useState("Person");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("clicked!");
  };

  return (
    <div className="bg-gray-50 h-screen py-20">
      <div className="flex flex-col justify-center h-1/2 text-xl md:text-2xl text-center">
        <p className="text-2xl md:text-3xl mb-10">Reservation at LaVuTa</p>

        <form onSubmit={onSubmit}>
          <div className="flex items-center justify-evenly">
            <div className="items-center w-1/2 md:w-4/6 bg-gray-50">
              <div className="dropdown text-base font-bold grid gap-5 md:gap-3 grid-cols-1 md:grid-cols-4">
                <button
                  className="w-full bg-gray-50 rounded-lg border border-gray-500"
                >
                  {person}
                </button>
                
                <div className="dropdown-detail w-1/2 h-36 z-20">
                  <div className="absolute p-7 px-auto border shadow-xl rounded-xl inline-block space-y-3 bg-white">
                    <div className="flex space-x-4 justify-between">
                      <div>Adults</div>
                      <div>
                        <input
                          className="w-16 rounded-lg border border-gray-200 "
                          type="number"
                          default="1"
                          min="1"
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
                          min="1"
                        />
                      </div>
                    </div>
                    <div className="pt-4 mx-auto">
                      <button
                        onClick={() => {
                          setPerson("2 adults");
                        }}
                        className="block w-5/6 bg-blue-400 rounded-lg font-semibold text-sm text-white mt-4"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowDatePicker(true)}
                  className="w-full bg-gray-50 rounded-lg border border-gray-500"
                >
                  Date
                </button>
                {showDatePicker ? <DatePicker /> : null}
                <button className="w-full bg-gray-50 rounded-lg border border-gray-500">
                  Time
                </button>
                <button className="w-full bg-blue-500 text-white rounded-lg border border-gray-500">
                  Book
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Book;
