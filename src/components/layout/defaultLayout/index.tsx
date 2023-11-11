import React from 'react';
import Footer from '~/components/generic/Footer';
import Navigation from '~/components/generic/Navigation';

function DefaultLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
