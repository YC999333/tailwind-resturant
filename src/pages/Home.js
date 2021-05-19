import React, { useState } from 'react';

function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-cover h-screen bg-landing-image'>
      <div className='flex flex-col justify-center h-full text-xl md:text-2xl text-center'>
        <p className='text-4xl md:text-6xl text-white font bold mx-auto p-1 md:p-4 text-shadow'>
          饗受美食，彈指之間
        </p>
        <button
          onClick={() => setShowModal(true)}
          className='font-bold text-reen-600 transform hover:scale-110 bg-white mx-auto rounded-lg py-2 px-10 md:py-3 mt-10'
        >
          Book now!
        </button>
        {showModal ? (
            <div className='relative px-4 h-36 md:flex md:items-center md:justify-center'>
              <div className='bg-black opacity-25 absolute z-10 inset-0'></div>
              <div className='bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative'>
                <div className='md:flex items-center'>
                  <div className='mt-4 md:mt-0 md:ml-6 text-center md:text-left'>
                    <p className='font-bold'>要預約? 先加入兔兔教!</p>
                  </div>
                </div>
                <div className='text-center md:text-right mt-4 md:flex md:justify-end'>
                  <button className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2'>
                    No
                  </button>

                  <button
                    onClick={() => setShowModal(false)}
                    className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
                md:mt-0 md:order-1'
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
