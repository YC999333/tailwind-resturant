import React, { useContext, useState, useRef, useEffect } from "react";
import Cart from "./Cart";
import MenuItem from "./MenuItem";
import menu from "../Data/menu";
import Context from "./Context/Context";

function OnlineOrder() {
  const [shake, setShake] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const ref = useRef();

  useEffect(() => {
    shake
      ? ref.current.classList.add("shake")
      : ref.current.classList.remove("shake");
  }, [shake]);

  const {
    antipasti,
    soup,
    salad,
    pasta,
    pizza,
    main,
    desert,
    redWine,
    whiteWine,
    cocktail,
    beer,
    nonAlcohol,
  } = menu;

  const context = useContext(Context);

  const handleProductAdd = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 500);
  };

  return (
    <div className="bg-gray-50 text-gray-800 p-1">
      <div className="relative grid p-8 grid-cols-1 md:grid-cols-9 lg:grid-cols-9 xl:grid-cols-8 gap-4">
        <div className="grid md:col-span-5 lg:col-span-6 xl:col-span-5">
          <p className="text-center mb-24 uppercase text-4xl font-bold mt-10">
            Online Order
          </p>
          <p className="text-center mb-20 uppercase underline text-3xl font-bold">
            Main Menu
          </p>
          <p className="text-center mb-12 uppercase underline text-2xl">
            ANTIPASTI (前菜)
          </p>
          <div className="gap-7 lg:gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 mt-8">
            {antipasti.map((a) => {
              return (
                <MenuItem
                  key={a.id}
                  title={a.title}
                  description={a.description}
                  price={a.price}
                  id={a.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Soup (湯品)
          </p>
          <div className="gap-7 lg:gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 mt-8">
            {soup.map((s) => {
              return (
                <MenuItem
                  key={s.id}
                  title={s.title}
                  description={s.description}
                  price={s.price}
                  id={s.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Salad (沙拉)
          </p>
          <div className="gap-7 lg:gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 mt-8">
            {salad.map((s) => {
              return (
                <MenuItem
                  key={s.id}
                  title={s.title}
                  description={s.description}
                  price={s.price}
                  id={s.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Pasta
          </p>
          <div className="gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 mt-8">
            {pasta.map((p) => {
              return (
                <MenuItem
                  key={p.id}
                  title={p.title}
                  description={p.description}
                  price={p.price}
                  id={p.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Pizza
          </p>
          <div className="gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 mt-8">
            {pizza.map((p) => {
              return (
                <MenuItem
                  key={p.id}
                  title={p.title}
                  description={p.description}
                  price={p.price}
                  id={p.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Main (主菜)
          </p>
          <div className="gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 mt-8">
            {main.map((m) => {
              return (
                <MenuItem
                  key={m.id}
                  title={m.title}
                  description={m.description}
                  price={m.price}
                  id={m.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Desert (甜點)
          </p>
          <div className="gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 mt-8">
            {desert.map((d) => {
              return (
                <MenuItem
                  key={d.id}
                  title={d.title}
                  description={d.description}
                  price={d.price}
                  id={d.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
          <div className="border-b-2 border-gray-800 border-solid mt-20"></div>
          <p className="text-center mb-12 uppercase underline text-3xl font-bold mt-24">
            Drink Menu
          </p>
          <p className="text-center mb-12 uppercase underline text-2xl mt-20">
            Red Wine (By Bottle)
          </p>
          <div className="gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 mt-8">
            {redWine.map((r) => {
              return (
                <MenuItem
                  key={r.id}
                  title={r.title}
                  description={r.description}
                  price={r.price}
                  id={r.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            White Wine (By Bottle)
          </p>
          <div className="gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-8">
            {whiteWine.map((w) => {
              return (
                <MenuItem
                  key={w.id}
                  title={w.title}
                  description={w.description}
                  price={w.price}
                  id={w.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Cocktails
          </p>
          <div className="gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 mt-8">
            {cocktail.map((c) => {
              return (
                <MenuItem
                  key={c.id}
                  title={c.title}
                  description={c.description}
                  price={c.price}
                  id={c.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Draft Beer
          </p>
          <div className="gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 mt-8">
            {beer.map((b) => {
              return (
                <MenuItem
                  key={b.id}
                  title={b.title}
                  description={b.description}
                  price={b.price}
                  id={b.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Non Alcoholic
          </p>
          <div className="gap-7 lg:gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 mt-8">
            {nonAlcohol.map((n) => {
              return (
                <MenuItem
                  key={n.id}
                  title={n.title}
                  description={n.description}
                  price={n.price}
                  id={n.id}
                  addItemToCart={context.addItemToCart}
                  onProductAdd={handleProductAdd}
                />
              );
            })}
          </div>
        </div>

        <div className="fixed right-5 w-80 lg:w-92 xl:w-2/6 xl:px-10 grid hidden md:block md:col-span-4 lg:col-span-3 mt-4 h-full overflow-x-auto pb-20">
          <Cart shake={shake} />
        </div>

        <div
          ref={ref}
          id="cart"
          className="md:hidden fixed top-0 left-0.5 h-full flex sm:pt-24 pt-28"
        >
          <button
            onClick={() => setShowCart(!showCart)}
            className="text-2xl p-0 w-12 h-12 rounded-full hover:bg-indigo-500 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
          >
            <i className="far fa-shopping-cart"></i>
          </button>

          {showCart ? (
            <div
              id="show-cart"
              className="rounded-lg z-50 max-h-full w-72 overflow-x-auto"
            >
              <div className="h-2"></div>
              <Cart shake={shake} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default OnlineOrder;
