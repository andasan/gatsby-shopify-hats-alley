import styled from 'styled-components';

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SingleProduct = styled.div`
  color: #151515;

  > hr {
    border: none;
    border-top: 1px solid #ddd;
    height: 1px;
  }

  > p {
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    padding-left: 20px;

    > h3 {
      margin-top: -0px;
    }
  }
`;

export const SingleProductPrice = styled.div`
  font-size: 24px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #3cc3c1;
`;

export const SelectWrapper = styled.div`
  margin-top: 40px;
  > strong {
    display: block;
    margin-bottom: 8px;
  }

  label {
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      display: inline-block;
      border: solid #323232;
      border-width: 0 3px 3px 0;
      width: 4px;
      height: 4px;
      padding: 3px;
      transform: translate(-1rem, -0.6rem) rotate(45deg);
      -webkit-transform: translate(-1rem, -0.5rem) rotate(45deg);
      right: 0;
      top: 20px;
      z-index: 2;
      pointer-events: none;
    }
  }

  select {
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    width: 300px;
    height: 44px;
    color: #999;
    border: 1px solid #ddd;
    outline: none;
    font-size: 16px;
    padding: 10px 14px;
    margin: 0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
