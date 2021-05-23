import React from "react";

function Events() {
  return (
    <div className="bg-gray-100 text-gray-800 p-8 bg-events-image">
      <p className="text-4xl text-center text-gray-800 underline uppercase mt-15 mb-20">
        Special Events
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <div className="rounded-lg shadow-sm bg-white border-4 border-white">
          <div className="p-1 lg:p-2 text-center">
            <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-500 rounded-full mb-4">
              Special TakeOut Offer
            </span>
            <p className="text-gray-600 text-3xl">Free Pizza!</p>
            <img
              className="object-cotain mt-3"
              src="https://upload.cc/i1/2021/05/11/uKnWCr.jpg"
              alt="pizza"
            />
          </div>
          <div className="text-center p-5 lg:p-6 bg-gray-100 space-y-5 lg:space-y-6 text-gray-700 rounded-b-lg">
            <p className="text-gray-600 text-xl mt-5">
              Buy over $50, <br></br>Get 1 free pizza!
            </p>
            <a
              className="px-4 py-3 text-white text-center uppercase font-semibold rounded bg-gray-700 hover:bg-gray-900 block w-full"
              href="/"
            >
              Buy Now
            </a>
          </div>
        </div>

        <div className="rounded-lg shadow-sm bg-white border-4 border-white">
          <div className="p-2 lg:p-3 text-center">
            <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-500 rounded-full mb-4">
              Saturday Sports Night
            </span>
            <p className="text-gray-600 text-3xl">Free Beer!</p>
            <img
              className="object-cotain mt-3"
              src="https://upload.cc/i1/2021/05/11/avEAf4.jpg"
              alt="beer"
            />
          </div>
          <div className="text-center p-5 lg:p-6 bg-gray-100 space-y-5 lg:space-y-6 text-gray-700 rounded-b-lg">
            <p className="text-gray-600 text-xl mt-5">
              Buy 2 beers, <br></br>Get 1 free!
            </p>
            <a
              className="px-4 py-3 text-white text-center uppercase font-semibold rounded bg-gray-700 hover:bg-gray-900 block w-full"
              href="/"
            >
              Join Now
            </a>
          </div>
        </div>

        <div className="rounded-lg shadow-sm bg-white border-4 border-white">
          <div className="p-2 lg:p-3 text-center">
            <span className="inline-block text-sm uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-500 rounded-full mb-4">
              Happy Hour (Sunday Night)
            </span>
            <p className="text-gray-600 text-3xl">All You Can Drink!</p>
            <img
              className="object-cotain mt-3"
              src="https://upload.cc/i1/2021/05/11/P6gfh8.jpg"
              alt="beer"
            />
          </div>
          <div className="text-center p-5 lg:p-6 bg-gray-100 space-y-5 lg:space-y-6 text-gray-700 rounded-b-lg">
            <p className="text-gray-600 text-xl mt-5">
              From 5pm to 7pm. <br></br>Only $30!
            </p>
            <a
              className="px-4 py-3 text-white text-center uppercase font-semibold rounded bg-gray-700 hover:bg-gray-900 block w-full"
              href="/"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Events;
