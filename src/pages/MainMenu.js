import React from 'react';

function Menu() {
  return (
    <div className='bg-gray-100 text-white px-20 md:px-36 sm:px-48 py-8 bg-center bg-contain sm:bg-cover text-shadow bg-main-image'>
      <p className='text-center mb-30 uppercase underline text-5xl mt-20'>
        Main Menu
      </p>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        ANTIPASTI (前菜)
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Antipasti</p>
          <p className='p-2 text-sm'>
            handcrafted italian salami, cheese, olives and vegetables
          </p>
          <p className='p-2'>$200</p>
        </div>
        <div className='text-center text-xl md:text-2xl  max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Meatballs</p>
          <p className='p-2 text-sm'>three housemade meatballs with grilled bread</p>
          <p className='p-2'>$220</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Bruschetta</p>
          <p className='p-2 text-sm'>
            grilled ciabatta bread topped with fresh tomatoes, garlic, basil and
            olive oil
          </p>
          <p className='p-2'>$300</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Mussels</p>
          <p className='p-2 text-sm'>in a spicy tomato sauce</p>
          <p className='p-2'>$380</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Soup (湯品)
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Zuppa Campagnola</p>
          <p className='p-2 text-sm'>
            Chicken broth with spinach, cheese and whisked egg
          </p>
          <p className='p-2'>$120</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Tor Tellini In Brodo Di Pollo</p>
          <p className='p-2 text-sm'>
            Chicken broth with home-made sausage and ham tortellini
          </p>
          <p className='p-2'>$150</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Salad (沙拉)
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Raw Brussels Sprouts</p>
          <p className='p-2 text-sm'>
            pecorino romano, parsley, grapes, olive oil, sherry vinegar, toasted
            almonds
          </p>
          <p className='p-2'>$220</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Honey Gem</p>
          <p className='p-2 text-sm'>
            padron peppers, capers, olives, celery, cherry tomato, chives, tuna
            vinaigrette
          </p>
          <p className='p-2'>$240</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Pasta
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Maccheroni</p>
          <p className='p-2 text-sm'>meat sauce, basil, parmesan</p>
          <p className='p-2'>$280</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Rigatoni</p>
          <p className='p-2 text-sm'>vodka sauce, chili flake, basil, fresh ricotta</p>
          <p className='p-2'>$290</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Lasagne</p>
          <p className='p-2 text-sm'>
            italian sausage, meat sauce, parmesan, locatelli
          </p>
          <p className='p-2'>$300</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Ravioli</p>
          <p className='p-2'>kabocha squash, hazelnuts, brown butter</p>
          <p className='p-2'>$280</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Pizza
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Pizza Margherita</p>
          <p className='p-2 text-sm'>Homemade Pizza Sauce, Mozzarella And Fresh Basil</p>
          <p className='p-2'>$230</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Pizza Diavola</p>
          <p className='p-2 text-sm'>Homemade Pizza Sauce, Mozzarella, Spicy Salame, Spicy Olive Oil And Hot Pepper Flakes</p>
          <p className='p-2'>$240</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Main (主菜)
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>T-Bone</p>
          <p className='p-2'>24oz, Caterina’s Oil</p>
          <p className='p-2'>$480</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Veal Chop Milanese</p>
          <p className='p-2 text-sm'>
            Cook's Garden - sorrel, mustard greens, dandelion, fennel, radish,
            lemon
          </p>
          <p className='p-2'>$490</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Pork Chop</p>
          <p className='p-2 text-sm'>
            fried fingerling potatoes, olives, roasted shallots, capers, garlic,
            balsamic vinegar, fresh herbs
          </p>
          <p className='p-2'>$380</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Roasted Chicken</p>
          <p className='p-2 text-sm'>
            creamed polenta, kale, calabrian chilies, shallots, maitake
            mushrooms
          </p>
          <p className='p-2'>$280</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        After Dinner (甜點)
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Affogato</p>
          <p className='p-2 text-sm'>vanilla gelato, espresso</p>
          <p className='p-2'>$120</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Sicilian Ice Cream Sandwich</p>
          <p className='p-2 text-sm'>pistachio butter, brioche bun</p>
          <p className='p-2'>$80</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Chocolate Panna Cotta</p>
          <p className='p-2 text-sm'>with espresso crumble</p>
          <p className='p-2'>$120</p>
        </div>
        <div className='text-center text-xl md:text-2xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Tiramisu</p>
          <p className='p-2 text-sm'>rum, mascarpone, espresso cookie, cocoa</p>
          <p className='p-2'>$120</p>
        </div>
        </div>
    </div>
  );
}

export default Menu;
