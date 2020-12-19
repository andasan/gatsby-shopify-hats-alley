import React from 'react';

import { ImageThumbnailWrapper, ImageGatsbyComponent } from './styles';

export default function ImageThumbnail({ isActive, onClickHandler, image }) {
  const handleClick = () => onClickHandler(image);
  return (
    <ImageThumbnailWrapper onClick={handleClick} isActive={isActive}>
      <ImageGatsbyComponent className="thumb" fluid={image.localFile.childImageSharp.fluid} />
    </ImageThumbnailWrapper>
  );
}
