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
  text-align: center;
  > div {
    padding: 20px;
    ${StyledLink} {
        padding: 22px;
        background-color: #d00000;
        color: #fff;
        // border: 3px solid #d8f3dc;
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
  font-size: 3rem;
  font-weight: bold;
  border-radius: 10px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.75);
//   background: ${props => (props.sale ? 'red' : 'none')};
`;

export const Description = styled.div`
  font-size: 20px;
  margin: 20px 0 50px;
  padding: 10px;
`;
