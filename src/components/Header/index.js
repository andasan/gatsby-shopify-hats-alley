import React from 'react';

import { HeaderWrapper, LogoContainer } from './styles';

import { Logo } from '../Logo';
import { Cart } from '../Cart';

export const Header = ({ isHome }) => {
  return (
    <HeaderWrapper isHome={isHome} >
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Cart />
    </HeaderWrapper>
  );
};
