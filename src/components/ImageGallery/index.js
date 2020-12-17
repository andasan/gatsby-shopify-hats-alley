import React from 'react';
import Img from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnails'

export function ImageGallery({ images }) {
  console.log(images);
  return (
    <ImageGalleryWrapper>
      <div>
        <Img fluid={images[0].localFile.childImageSharp.fluid} />
      </div>
      <div>
           {
                images.map((image,index) => (
                    <ImageThumbnail key={index} image={image.localFile.childImageSharp.fluid} />
                ))
            }
      </div>
    </ImageGalleryWrapper>
  );
}
