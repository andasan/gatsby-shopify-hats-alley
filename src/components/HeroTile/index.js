import React from 'react';
import { HeroTileWrapper, StyledBackground, HeroTileContent, Title, Description } from './styles';
import { StyledLink } from '../StyledLink';

export function HeroTile({
  destination,
  description,
  title,
  backgroundImage,
  sale,
}) {
    const isDarken = true;
  return (
    <HeroTileWrapper>
      {/* <BackgroundImage fluid={backgroundImage} /> */}
      <StyledBackground fluid={backgroundImage} isDarken={isDarken} key={isDarken ? `dark` : `light`} />
      <HeroTileContent>
        <div>
          <Title>One goal, one passion - Hats.</Title>
          <Description sale={sale}>{description}</Description>
          <StyledLink to={destination}>Shop now</StyledLink>
        </div>
      </HeroTileContent>
    </HeroTileWrapper>
  );
}
