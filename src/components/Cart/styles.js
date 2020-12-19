import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
    to: '/cart',
}))`
    margin-left: auto;
    text-decoration: none;
    color: inherit;

    &:hover{
        text-decoration: underline;
    }
`

export const IconContainer = styled.div`
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  width: 13px;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  left: 13px;
`;

export const TotalPriceContainer = styled.span`
  margin-left: 10px;
`;