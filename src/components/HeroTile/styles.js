import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { StyledLink } from '../StyledLink';

export const HeroTileWrapper = styled.div`
  height: 50vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 5px;
  > div {
    flex-grow: 1;
  }
`;

export const StyledBackground = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: brightness(
      ${({ isDarken }) => {
        return isDarken ? '0.8' : '0.0';
      }}
    );
  }
`;

export const HeroTileContent = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  max-width: 960px;
  height: 100%;
  color: white;
  text-decoration: none;
  //   background: rgba(0, 0, 0, 0.1);
  text-align: center;
  > div {
    padding: 20px;
    ${StyledLink} {
      padding: 4px 17px;
      background: white;
      border: 2px solid;
      border-radius: 6px;
      font-weight: bold;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      display: inline-block;
      color: black;
      text-decoration: none;
      cursor: pointer;
      transition: all 250ms ease-in-out;
      &:hover {
        color: white;
        background: black;
      }
    }
  }
`;

export const Title = styled.div`
  padding: 5px 10px;
  margin-bottom: 5px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 10px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
//   background: ${props => (props.sale ? 'red' : 'none')};
`;

export const Description = styled.div`
  font-size: 20px;
  margin: 10px;
  border-radius: 10px;
//   background: ${props => (props.sale ? 'red' : 'none')};
  padding: 10px;
`;
