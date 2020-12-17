import React from 'react';
import Img from 'gatsby-image';
import { ImageThumbnailWrapper } from './styles';

export default function ImageThumbnail({ isActive, onClickHandler, image }){
    const handleClick = () => onClickHandler(image)
    return(
        <ImageThumbnailWrapper onClick={handleClick} isActive={isActive}>
            <Img fluid={image.localFile.childImageSharp.fluid} />
        </ImageThumbnailWrapper>
    )
}