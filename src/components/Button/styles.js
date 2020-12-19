import styled from 'styled-components'

export const ButtonWrapper = styled.button`
  grid-area: cart;
  padding: 22px 0;
  width: 200px;
  background-color: #3cc3c1;
  color: #fff;
  border-radius: 6px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 0;

  &:focus {
    outline: none;
  }

  &:hover:not([disabled]) {
    color: #151515;
    border-color: #f9e95e;
    box-shadow: inset 0 0 10px 50px rgba(249, 233, 94, 1);
  }

  &:disabled {
    opacity: 0.5;
  }
`;