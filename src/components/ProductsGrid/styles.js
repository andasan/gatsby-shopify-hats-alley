import styled from 'styled-components';

export const ProductsGridWrapper = styled.section`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;

  @media (min-width: 426px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1026px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;