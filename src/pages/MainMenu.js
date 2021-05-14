import React from 'react';

function Menu() {
  return (
    <div className='bg-gray-100 text-white px-48 py-8 bg-cover text-shadow bg-main-image'>
      <p className='text-center mb-30 uppercase underline text-5xl mt-20'>
        Menu
      </p>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        ANTIPASTI (前菜)
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Antipasti</p>
          <p className='p-2'>
            handcrafted italian salami, cheese, olives and vegetables
          </p>
          <p className='p-2'>$200</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Meatballs</p>
          <p className='p-2'>three housemade meatballs with grilled bread</p>
          <p className='p-2'>$220</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Bruschetta</p>
          <p className='p-2'>
            grilled ciabatta bread topped with fresh tomatoes, garlic, basil and
            olive oil
          </p>
          <p className='p-2'>$300</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Mussels</p>
          <p className='p-2'>in a spicy tomato sauce</p>
          <p className='p-2'>$380</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Soup (湯品)
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Zuppa Campagnola</p>
          <p className='p-2'>
            Chicken broth with spinach, cheese and whisked egg
          </p>
          <p className='p-2'>$120</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Tor Tellini In Brodo Di Pollo</p>
          <p className='p-2'>
            Chicken broth with home-made sausage and ham tortellini
          </p>
          <p className='p-2'>$150</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Salad (沙拉)
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Raw Brussels Sprouts</p>
          <p className='p-2'>
            pecorino romano, parsley, grapes, olive oil, sherry vinegar, toasted
            almonds
          </p>
          <p className='p-2'>$220</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Honey Gem</p>
          <p className='p-2'>
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
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Maccheroni</p>
          <p className='p-2'>meat sauce, basil, parmesan</p>
          <p className='p-2'>$280</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Rigatoni</p>
          <p className='p-2'>vodka sauce, chili flake, basil, fresh ricotta</p>
          <p className='p-2'>$290</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Lasagne</p>
          <p className='p-2'>
            italian sausage, meat sauce, parmesan, locatelli
          </p>
          <p className='p-2'>$300</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Ravioli</p>
          <p className='p-2'>kabocha squash, hazelnuts, brown butter</p>
          <p className='p-2'>$280</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Main (主菜)
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>T-Bone</p>
          <p className='p-2'>24oz, Caterina’s Oil</p>
          <p className='p-2'>$480</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Veal Chop Milanese</p>
          <p className='p-2'>
            Cook's Garden - sorrel, mustard greens, dandelion, fennel, radish,
            lemon
          </p>
          <p className='p-2'>$490</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Pork Chop</p>
          <p className='p-2'>
            fried fingerling potatoes, olives, roasted shallots, capers, garlic,
            balsamic vinegar, fresh herbs
          </p>
          <p className='p-2'>$380</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Roasted Chicken</p>
          <p className='p-2'>
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
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Affogato</p>
          <p className='p-2'>vanilla gelato, espresso</p>
          <p className='p-2'>$120</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Sicilian Ice Cream Sandwich</p>
          <p className='p-2'>pistachio butter, brioche bun</p>
          <p className='p-2'>$80</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Chocolate Panna Cotta</p>
          <p className='p-2'>with espresso crumble</p>
          <p className='p-2'>$120</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Tiramisu</p>
          <p className='p-2'>rum, mascarpone, espresso cookie, cocoa</p>
          <p className='p-2'>$120</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
