import React, {useState, useEffect} from 'react';
import Img from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
import ImageThumbnail from './ImageThumbnails'

export function ImageGallery({ selectedVariantImageId, images }) {
    const [activeThumbnail, setActiveThumbnail] = useState(
        images.find(({id}) => id === selectedVariantImageId) || images[0]
    );

    useEffect(() => {
        setActiveThumbnail(
            images.find(({id}) => id === selectedVariantImageId) || images[0]
        )
    }, [selectedVariantImageId, setActiveThumbnail, images]);

    const handleClick = (image) => {
        setActiveThumbnail(image);
    }
  return (
    <ImageGalleryWrapper>
      <div>
        <Img fluid={activeThumbnail.localFile.childImageSharp.fluid} />
      </div>
      <div>
           {
                images.map((image) => (
                    <ImageThumbnail 
                        key={image.id} 
                        image={image} 
                        isActive={activeThumbnail.id === image.id}
                        onClickHandler={handleClick}
                    />
                ))
            }
      </div>
    </ImageGalleryWrapper>
  );
}
