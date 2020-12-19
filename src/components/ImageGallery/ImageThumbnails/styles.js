import styled from 'styled-components';

export const ImageThumbnailWrapper = styled.div`
  cursor: pointer;
  border: 1px solid ${props => (props.isActive ? 'gray' : 'none')};
  box-shadow: 0 0 10px 0
    rgba(35, 31, 32, ${props => (props.isActive ? '.5' : '.1')});
  background-color: #fbfbfc;
  transition: all 0.3s ease;
  transform: scale(${props => (props.isActive ? '1.03' : '1')});
`;
