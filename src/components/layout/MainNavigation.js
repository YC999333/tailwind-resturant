import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <nav className='bg-gray-800'>
        <div className='sticky top-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-30'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='h-16 w-auto m-3'
                  src='https://upload.cc/i1/2021/05/10/wGmFIN.jpg'
                  alt='lavuta'
                />
              </div>
              <div className='flex-shrink-0 ml-6'>
                <h1 className='text-red-500 text-3xl font-bold stoke-1 items-center flex justify-between'>
                  LaVuTa
                </h1>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-center space-x-4'>
                  <a
                    href='/'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium'
                  >
                    Home
                  </a>

                  <a
                    href='/about'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'
                  >
                    About Us
                  </a>

                  <div className='relative group'>
                    <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'>
                      <span>Menu</span>
                    </button>
                    <div class='w-28 h-auto absolute top-15 z-20 p-4 hidden bg-gray-300 rounded-lg group-hover:block'>
                      <div className='grid gap-2 p-1 grid-cols-1 grid-rows-2'>
                        <a className='p-1 text-sm font-semibold' href='/main-menu'>
                          Main
                        </a>
                        <a className='p-1 text-sm font-semibold' href='/drink-menu'>
                          Drink
                        </a>
                      </div>
                    </div>
                  </div>

                  <a
                    href='/book-table'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'
                  >
                    Book
                  </a>
                  <a
                    href='/order-online'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'
                  >
                    Online Order
                  </a>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='hidden lg:block'>
                <div className='ml-10 flex items-center space-x-4'>
                  <a
                    href='/sign-up'
                    className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-base font-medium'
                  >
                    Sign Up
                  </a>

                  <a
                    href='/sign-in'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'
                  >
                    Sign In
                  </a>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type='button'
                    className='bg-gray-800 text-base rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                  >
                    <span class='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full backdrop-filter backdrop-invert'
                      src='https://static.thenounproject.com/png/363639-200.png'
                      alt=''
                    />
                  </button>
                </div>
              </div>

              {isOpen ? (
                <div
                  class='z-20 origin-top-right absolute right-10 top-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-300 ring-1 ring-black ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu-button'
                  tabindex='-1'
                >
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabindex='-1'
                    id='user-menu-item-0'
                  >
                    Your Profile
                  </a>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabindex='-1'
                    id='user-menu-item-1'
                  >
                    Orders
                  </a>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700'
                    role='menuitem'
                    tabindex='-1'
                    id='user-menu-item-2'
                  >
                    Sign out
                  </a>
                </div>
              ) : null}
            </div>

            <div className='lg:hidden'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type='button'
                className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isMenuOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {(ref) => (
            <div className='md:hidden' id='mobile-menu'>
              <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <a
                  href='/'
                  className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Home
                </a>

                <a
                  href='/about'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  About Us
                </a>
                
                <div class='relative group'>
                    <button class='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'>
                      <span>Menu</span>
                    </button>
                    <div class='w-28 h-auto absolute top-15 z-20 p-4 hidden bg-gray-300 rounded-lg group-hover:block'>
                      <div class='grid gap-2 p-1 grid-cols-1 grid-rows-2'>
                        <a class='p-1 text-sm font-semibold' href='/main-menu'>
                          Main
                        </a>
                        <a class='p-1 text-sm font-semibold' href='/drink-menu'>
                          Drink
                        </a>
                      </div>
                    </div>
                  </div>

                <a
                  href='/book-tabel'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Book
                </a>
                <a
                  href='/order-online'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Online Order
                </a>
                <a
                  href='/sign-up'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Sign Up
                </a>
                <a
                  href='/sign-in'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  Sign In
                </a>
                <a
                  href='#'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                >
                  User
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default MainNavigation;
