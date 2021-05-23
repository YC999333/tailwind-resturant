import React from "react";

function MenuItem({ ...props }) {
  const { addItemToCart } = props;
  return (
    <div className="relative text-left text-xl lg:text-2xl h-full w-72 lg:w-80 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
      <p className="p-2">{props.title}</p>
      <p className="p-2 h-20 text-sm">{props.description}</p>
      <p className="p-2">${props.price}</p>
      <p className="hidden">{props.id}</p>

      <div className="absolute bottom-3 right-5 sm:right-5 sm:right-10">
        <form>
          {/* <input
            className="border text-center w-10 text-xs trasmform hover:border-red-500"
            min="1"
            type="number"
            default={1}
            onChange={(e) => setQty(e.target.value)}
            value={qty}
          /> */}
          <button
            onClick={(e) => {
              addItemToCart({ ...props });
              e.preventDefault();
            }}
            className="absolute bottom-2 right-0.5 border text-center w-20 h-7 text-sm rounded-lg mx-2 trasmform hover:border-red-500"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default MenuItem;
