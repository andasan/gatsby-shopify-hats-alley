import React from 'react';
import Img from 'gatsby-image';
import { ImageThumbnailWrapper } from './styles';

export default function ImageThumbnail({ image }){
    return(
        <ImageThumbnailWrapper>
            <Img fluid={image} />
        </ImageThumbnailWrapper>
    )
}