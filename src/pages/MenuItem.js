import { useRef } from "react";

function MenuItem({ ...props }) {
  const ref = useRef();
  const { onProductAdd } = props;

  const handleClick = () => {
    ref.current.classList.add("send-to-cart");
    setTimeout(() => {
      ref.current.classList.remove("send-to-cart");
      onProductAdd();
    }, 1000);
  };

  const { addItemToCart } = props;
  return (
    <div className="relative text-left text-xl lg:text-2xl h-full w-72 lg:w-80 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
      <span ref={ref} className="cart-item"></span>
      <p className="p-2">{props.title}</p>
      <p className="p-2 h-20 text-sm">{props.description}</p>
      <p className="p-2">${props.price}</p>
      <p className="hidden">{props.id}</p>

      <div className="absolute bottom-3 right-5 sm:right-5 sm:right-10">
        <form>
          <button
            onClick={(e) => {
              addItemToCart({ ...props });
              e.preventDefault();
              handleClick();
            }}
            className="absolute bottom-1.5 right-0.5 border text-center w-28 h-7 text-sm rounded-lg mx-2 trasmform hover:border-red-500"
          >
            Add To Cart
          </button>
        </form>
      </div>
    </div>
  );
}

export default MenuItem;
