import styled from 'styled-components';

export const FormWrapper = styled.form`
  margin-top: 40px;
  width: 150px;
  display: grid;
  grid-template-columns: 70px 40px;
  row-gap: 5px;
  justify-item: start;
  grid-template-areas:
    'input up cart'
    'input down cart';

  .up {
    grid-area: up;

    &:before {
      content: '\u002B';
      margin-left: 2px;
      vertical-align: -2px;
    }
  }

  .down {
    grid-area: down;

    &:before {
      content: '\u002D';
      margin-left: 2px;
      vertical-align: -2px;
    }
  }
`;

export const QuantityInput = styled.input`
  grid-area: input;
  max-width: 60px;
  min-height: 60px;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.025em;
  border-radius: 6px;
  color: #151515;
  background: #ebebeb;
  text-align: center;
  font-weight: 500;
  border: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

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
`;
