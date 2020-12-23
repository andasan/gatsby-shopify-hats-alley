import styled from 'styled-components';
import { Button } from '../Button';

export const SearchForm = styled.form`
  margin-left: auto;
  display: flex;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  display: block;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  border-radius: 0;
  padding: 5px 10px;
  height: 30px;
  box-sizing: border-box;
  min-width: 0;
  margin-top: 10px;
  &:focus {
    border-color: black;
  }
`;

export const SearchButton = styled(Button)`
  margin: 10px 0 0 5px;
  width: 30px;
  height: 30px;
  padding-top: 9px;
`;
