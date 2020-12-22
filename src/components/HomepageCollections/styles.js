import styled from 'styled-components';

export const RemainingCollections = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  > div {
    flex-grow: 1;
    min-width: 100%;
    @media (min-width: 768px) {
      min-width: 50%;
    }
    @media (min-width: 1024px) {
      min-width: 33%;
    }
  }
`;
