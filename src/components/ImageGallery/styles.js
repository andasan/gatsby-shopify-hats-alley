import styled from 'styled-components';

export const ImageGalleryWrapper = styled.section`
  > div:first-child {
    box-shadow: 0 0 10px 0 rgba(35,31,32,.1);
    background-color: #fbfbfc;
  }

  > div:last-child {
    margin-top: 5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
