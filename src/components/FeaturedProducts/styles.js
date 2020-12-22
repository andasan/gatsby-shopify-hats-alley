import styled from 'styled-components';

export const FeaturedWrapper = styled.section`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 0;

  > h1 {
    font-size: 2.5rem;
  }
  
  @media (max-width: 1024px) {
    width: 80%;
  }
`;
