import React from 'react';
import MainNaviation from './MainNavigation';
import Footer from './Footer';

function Layout(props) {
  return (
    <div className='h-full'>
      <header className='sticky top-0 z-50'>
        <MainNaviation />
      </header>
      <main className='h-full'>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
