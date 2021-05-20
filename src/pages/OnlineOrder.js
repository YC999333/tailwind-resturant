import React, { useState } from "react";
import Cart from "./Cart";

function OnlineOrder() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 p-1">
      <div className="grid p-4 grid-cols-1 sm:grid-cols-8 lg:grid-cols-6 gap-4">
        <div className="grid sm:col-span-8 md:col-span-5 lg:col-span-4">
          <p className="text-center mb-24 uppercase text-4xl font-bold mt-10">
            Online Order
          </p>
          <p className="text-center mb-20 uppercase underline text-3xl font-bold">
            Main Menu
          </p>
          <p className="text-center mb-12 uppercase underline text-2xl">
            ANTIPASTI (前菜)
          </p>
          <div className="gap-7 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6 mt-8">
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Antipasti</p>
              <p className="p-2 text-xs sm:text-xs md:text-sm">
                handcrafted italian salami, cheese, olives and vegetables
              </p>
              <p className="p-2">$200</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs trasmform hover:border-red-500"
                  min="0"
                  value="1"
                  type="number"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 trasmform hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg  bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Meatballs</p>
              <p className="p-2 text-xs md:text-sm">
                three housemade meatballs with grilled bread
              </p>
              <p className="p-2">$220</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs trasmform hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 trasmform hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg  bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Bruschetta</p>
              <p className="p-2 text-xs md:text-sm">
                grilled ciabatta bread topped with fresh tomatoes, garlic, basil
                and olive oil
              </p>
              <p className="p-2">$300</p>
              <a
                href=""
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg  bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Mussels</p>
              <p className="p-2 text-xs md:text-sm">in a spicy tomato sauce</p>
              <p className="p-2">$380</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Soup (湯品)
          </p>
          <div className="gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6 mt-8">
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Zuppa Campagnola</p>
              <p className="p-2 text-xs md:text-sm">
                Chicken broth with spinach, cheese and whisked egg
              </p>
              <p className="p-2">$120</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg  bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Tor Tellini In Brodo Di Pollo</p>
              <p className="p-2 text-xs md:text-sm">
                Chicken broth with home-made sausage and ham tortellini
              </p>
              <p className="p-2">$150</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Salad (沙拉)
          </p>
          <div className="gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6 mt-8">
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Raw Brussels Sprouts</p>
              <p className="p-2 text-xs md:text-sm">
                pecorino romano, parsley, grapes, olive oil, sherry vinegar,
                toasted almonds
              </p>
              <p className="p-2">$220</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Honey Gem</p>
              <p className="p-2 text-xs md:text-sm">
                padron peppers, capers, olives, celery, cherry tomato, chives,
                tuna vinaigrette
              </p>
              <p className="p-2">$240</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Pasta
          </p>
          <div className="gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6 mt-8">
            <div className="text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Maccheroni</p>
              <p className="p-2 text-xs md:text-sm">
                meat sauce, basil, parmesan
              </p>
              <p className="p-2">$280</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Rigatoni</p>
              <p className="p-2 text-xs md:text-sm">
                vodka sauce, chili flake, basil, fresh ricotta
              </p>
              <p className="p-2">$290</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Lasagne</p>
              <p className="p-2 text-xs md:text-sm">
                italian sausage, meat sauce, parmesan, locatelli
              </p>
              <p className="p-2">$300</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Ravioli</p>
              <p className="p-2 text-xs md:text-sm">
                kabocha squash, hazelnuts, brown butter
              </p>
              <p className="p-2">$280</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Pizza
          </p>
          <div className="gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6 mt-8">
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Pizza Margherita</p>
              <p className="p-2 text-xs md:text-sm">
                Homemade Pizza Sauce, Mozzarella And Fresh Basil
              </p>
              <p className="p-2">$230</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Pizza Diavola</p>
              <p className="p-2 text-xs md:text-sm">
                Homemade Pizza Sauce, Mozzarella, Spicy Salame, Spicy Olive Oil
                And Hot Pepper Flakes
              </p>
              <p className="p-2">$240</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Main (主菜)
          </p>
          <div className="gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6 mt-8">
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">T-Bone</p>
              <p className="p-2 text-xs md:text-sm">24oz, Caterina’s Oil</p>
              <p className="p-2">$480</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Veal Chop Milanese</p>
              <p className="p-2 text-xs md:text-sm">
                Cook's Garden - sorrel, mustard greens, dandelion, fennel,
                radish, lemon
              </p>
              <p className="p-2">$490</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Pork Chop</p>
              <p className="p-2 text-xs md:text-sm">
                fried fingerling potatoes, olives, roasted shallots, capers,
                garlic, balsamic vinegar, fresh herbs
              </p>
              <p className="p-2">$380</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Roasted Chicken</p>
              <p className="p-2 text-xs md:text-sm">
                creamed polenta, kale, calabrian chilies, shallots, maitake
                mushrooms
              </p>
              <p className="p-2">$280</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            After Dinner (甜點)
          </p>
          <div className="gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6 mt-8">
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg">
              <p className="p-2">Affogato</p>
              <p className="p-2 text-xs md:text-sm">vanilla gelato, espresso</p>
              <p className="p-2">$120</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Sicilian Ice Cream Sandwich</p>
              <p className="p-2 text-xs md:text-sm">
                pistachio butter, brioche bun
              </p>
              <p className="p-2">$80</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Chocolate Panna Cotta</p>
              <p className="p-2 text-xs md:text-sm">with espresso crumble</p>
              <p className="p-2">$120</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Tiramisu</p>
              <p className="p-2 text-xs md:text-sm">
                rum, mascarpone, espresso cookie, cocoa
              </p>
              <p className="p-2">$120</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-gray-800 border-solid mt-20"></div>
          <p className="text-center mb-12 uppercase underline text-3xl font-bold mt-24">
            Drink Menu
          </p>
          <p className="text-center mb-12 uppercase underline text-2xl mt-20">
            Red Wine (By Bottle)
          </p>
          <div className="gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6 mt-8">
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">
                2019 Rossese, Cascina Feipu dei Massaretti, Liguria
              </p>
              <p className="p-2">$1200</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">
                2018 Cerasuolo di Vittoria, Manenti, Sicilia
              </p>
              <p className="p-2">$1800</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">
                2015 Rosso di Montalcino, Stella di Campalto, Toscana
              </p>
              <p className="p-2">$6000</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">2018 Langhe, Nada, Piemonte</p>
              <p className="p-2">$1100</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            White Wine (By Bottle)
          </p>
          <div className="gap-6 grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8">
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">
                2016 Timorasso, ‘Caespes’, Ezio Poggio, Piemonte
              </p>
              <p className="p-2">$1200</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">
                2018 Sancerre, ‘Flores’, Vincent Pinard, Loire
              </p>
              <p className="p-2">$1800</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">
                2014 Trebbiano d’Abruzzo, Valentini, Abruzzo
              </p>
              <p className="p-2">$6000</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">2018 Chablis, Domaine des Hates, Bourgogne</p>
              <p className="p-2">$1100</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Cocktails
          </p>
          <div className="gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6 mt-8">
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">The West Side</p>
              <p className="p-2 text-xs md:text-sm">
                vodka, orgeat, mint, cucumber, lime, angostura bitters
              </p>
              <p className="p-2">$150</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Sierra Norte</p>
              <p className="p-2 text-xs md:text-sm">
                mezcal, aperol, pineapple, lemon
              </p>
              <p className="p-2">$150</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Atomic Old Fashioned</p>
              <p className="p-2 text-xs md:text-sm">
                eagle rare single bourbon, bitters, sugar
              </p>
              <p className="p-2">$150</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Paloma</p>
              <p className="p-2 text-xs md:text-sm">
                reposado tequila, grapefruit, lime, tonic, salt
              </p>
              <p className="p-2">$150</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Draft Beer
          </p>
          <div className="gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6 mt-8">
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Three Weavers Kolsch</p>
              <p className="p-2">$100</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Chronic Amber Ale</p>
              <p className="p-2">$100</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <p className="text-center mb-30 uppercase underline text-2xl mt-20">
            Non Alcoholic
          </p>
          <div className="gap-6 grid place-items-center p-2 grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-6 mt-8">
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Coca Cola</p>
              <p className="p-2">$50</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Fresh Orange Juice</p>
              <p className="p-2">$60</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Bottled Sparkling Water</p>
              <p className="p-2">$60</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="relative text-left text-xl lg:text-2xl h-full w-4/5 p-2 rounded-lg bg-white border-solid border-2 border-light-gray-500 transform hover:scale-110 hover:shadow-lg hover:border-red-500">
              <p className="p-2">Sprite</p>
              <p className="p-2">$50</p>
              <a
                href="/"
                className="mx-3 font-semibold hover:text-red-500 text-gray-500 text-xs"
              >
                Remove
              </a>
              <div className="absolute bottom-2.5 right-5 sm:right-10">
                <input
                  className="border text-center w-10 text-xs hover:border-red-500"
                  min="0"
                  type="number"
                  value="1"
                />
                <button
                  className="border text-center w-10 text-xs rounded-lg mx-2 hover:border-red-500"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid hidden md:block md:col-span-3 lg:col-span-2 mt-4 h-screen">
          <Cart />
        </div>

        <div className="fixed top-0 left-0 w-3/5 h-full pt-24 pb-2">
          <div className="md:hidden border-red-500 mx-auto border-2 rounded-lg shadow-lg relative left-2 z-50 bg-gray-50 inline-block max-h-full overflow-x-auto">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="text-2xl w-10 h-10"
            >
              <i className="far fa-shopping-cart"></i>
            </button>

            {isCartOpen ? <Cart /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineOrder;
