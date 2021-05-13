import React from 'react';
import MainNaviation from './MainNavigation';
import Footer from './Footer';

function Layout(props) {
  return (
    <div>
      <header className='sticky top-0 z-50'>
        <MainNaviation />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
