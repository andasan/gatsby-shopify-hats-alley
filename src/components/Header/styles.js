import styled, { css } from 'styled-components';
import { StyledLink } from '../StyledLink';

const fullWidthStyles = ({ isHome }) => {
  if (isHome) {
    return css`
      z-index: 100;
      background: transparent;
    `;
  }
};

export const HeaderWrapper = styled.header`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
`;

export const LogoContainer = styled(StyledLink).attrs(() => ({
  to: '/',
}))`
    img{
        @media (max-width: 768px) {
            height: 50px;
          }
    }
`;
