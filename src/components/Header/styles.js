import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const HeaderWrapper = styled.header`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const LogoContainer = styled(StyledLink).attrs(() => ({
  to: '/',
}))``;
