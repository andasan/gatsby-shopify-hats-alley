import styled from 'styled-components';

export const StepperButton = styled.button`
  width: 32px;
  height: 32px;
  font-size: 24px;
  border: none;
  border-radius: 6px;
  background: #ebebeb;
  text-align: center;
  font-weight: 400;
  cursor: pointer;
  color: #151515;
  transition: 0.3s all ease;
  outline: none;

  &:disabled {
    opacity: 0.5;
  }

  &.up {
    grid-area: up;

    &:before {
      content: '\u002B';
      margin-left: 2px;
      vertical-align: -2px;
    }
  }

  &.down {
    grid-area: down;

    &:before {
      content: '\u002D';
      margin-left: 2px;
      vertical-align: -2px;
    }
  }
`;