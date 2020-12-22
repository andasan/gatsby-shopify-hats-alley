import React from 'react';
import { LayoutWrapper } from './styles';
import { Header } from '../Header';

const Layout = ({ children, path }) => {
  return (
    <>
      <Header isHome={path === '/'} />
      <LayoutWrapper isHome={path === '/'}>
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};

export { Layout };
