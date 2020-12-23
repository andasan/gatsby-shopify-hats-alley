import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const ProductTileWrapper = styled.div`
  border: 1px solid #ddd;
  display: flex;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  flex-direction: column;

  > ${StyledLink} {
    padding: 22px 0;
    background-color: #3cc3c1;
    color: #fff;
    // border-radius: 6px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
    }

    &:hover:not([disabled]) {
      color: #151515;
      border-color: #f9e95e;
      box-shadow: inset 0 0 10px 50px rgba(255, 183, 3, 1);
    }
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 20px;
`;

export const Description = styled.div`
  color: #999;
  text-align: left;
  padding: 0 20px 10px 20px;
`;

export const Price = styled.div`
  font-style: italic;
  padding: 20px;
  font-weight: bold;
  margin-top: auto;
`;
