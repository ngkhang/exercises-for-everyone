import React from 'react';
// import Header from '~/components/generic/Header';

function DefaultLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="">
      {/* <Header /> */}
      {children}
    </div>
  );
}

export default DefaultLayout;
