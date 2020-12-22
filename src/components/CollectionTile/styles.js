import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CollectionTileWrapper = styled.div`
  height: 300px;
  max-height: 100vh;
  display: flex;
  position: relative;
  margin-bottom: 5px;
  > div {
    flex-grow: 1;
  }
`;

export const CollectionTileContent = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  > div {
    padding: 20px 0;
    width: 80%;
    height: 70%;
    border: 1px solid #999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    ${StyledLink} {
      margin: 0 auto;
      padding: 16px;
      width: 100px;
      background-color: #3cc3c1;
      color: #fff;
      border: 3px solid #d8f3dc;
      border-radius: 6px;
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
  }
`;

export const Title = styled.div`
  padding: 5px 10px;
  margin-bottom: 5px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
  background: ${props => (props.sale ? 'red' : 'none')};
`;

export const Description = styled.div`
  font-size: 20px;
  margin: 10px;
  border-radius: 10px;
  background: ${props => (props.sale ? 'red' : 'none')};
  padding: 10px;
`;
