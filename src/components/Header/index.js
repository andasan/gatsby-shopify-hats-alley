import React from 'react';

import { HeaderWrapper, LogoContainer } from './styles';

import { Logo } from '../Logo';
import { Cart } from '../Cart';
import { Search } from '../Search';

export const Header = ({ isHome }) => {
  return (
    <HeaderWrapper isHome={isHome} >
      <LogoContainer>
          <Logo />
      </LogoContainer>
      <Search />
      <Cart />
    </HeaderWrapper>
  );
};
