import React from 'react';
import Footer from '~/components/generic/Footer';
import Navigation from '~/components/generic/Navigation';

function DefaultLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow flex">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
