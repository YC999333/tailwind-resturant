import React from 'react';

function DrinkMenu() {
  return (
    <div className='bg-gray-100 text-white px-28 sm:px-48 py-8 bg-cover text-shadow bg-drink-image'>
      <p className='text-center mb-30 uppercase underline text-5xl mt-20'>
        Drink Menu
      </p>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Red Wine (By Bottle)
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>
            2019 Rossese, Cascina Feipu dei Massaretti, Liguria
          </p>
          <p className='p-2'>$1200</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>2018 Cerasuolo di Vittoria, Manenti, Sicilia</p>
          <p className='p-2'>$1800</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>
            2015 Rosso di Montalcino, Stella di Campalto, Toscana
          </p>
          <p className='p-2'>$6000</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>2018 Langhe, Nada, Piemonte</p>
          <p className='p-2'>$1100</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        White Wine (By Bottle)
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>
            2016 Timorasso, ‘Caespes’, Ezio Poggio, Piemonte
          </p>
          <p className='p-2'>$1200</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>2018 Sancerre, ‘Flores’, Vincent Pinard, Loire</p>
          <p className='p-2'>$1800</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>2014 Trebbiano d’Abruzzo, Valentini, Abruzzo</p>
          <p className='p-2'>$6000</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>2018 Chablis, Domaine des Hates, Bourgogne</p>
          <p className='p-2'>$1100</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Cocktails
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>The West Side</p>
          <p className='p-2'>
            vodka, orgeat, mint, cucumber, lime, angostura bitters
          </p>
          <p className='p-2'>$150</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Sierra Norte</p>
          <p className='p-2'>mezcal, aperol, pineapple, lemon</p>
          <p className='p-2'>$150</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Atomic Old Fashioned</p>
          <p className='p-2'>eagle rare single bourbon, bitters, sugar</p>
          <p className='p-2'>$150</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Paloma</p>
          <p className='p-2'>reposado tequila, grapefruit, lime, tonic, salt</p>
          <p className='p-2'>$150</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Draft Beer
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Three Weavers Kolsch</p>
          <p className='p-2'>$100</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Chronic Amber Ale</p>
          <p className='p-2'>$100</p>
        </div>
      </div>
      <p className='text-center mb-30 uppercase underline text-2xl mt-20'>
        Non Alcoholic
      </p>
      <div className='grid place-items-center p-2 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 xl:gap-6 mt-8'>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Coca Cola</p>
          <p className='p-2'>$50</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Fresh Orange Juice</p>
          <p className='p-2'>$60</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Bottled Sparkling Water</p>
          <p className='p-2'>$60</p>
        </div>
        <div className='text-center text-xl max-w-md w-10/12 p-2 rounded-lg'>
          <p className='p-2'>Sprite</p>
          <p className='p-2'>$50</p>
        </div>
      </div>
    </div>
  );
}

export default DrinkMenu;
