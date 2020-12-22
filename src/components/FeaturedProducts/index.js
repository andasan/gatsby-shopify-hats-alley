import React from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

import { FeaturedWrapper } from './styles';

export function FeaturedProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Featured Hats'
  );

  return (
    <FeaturedWrapper>
      <h1>Featured hats</h1>
      <ProductsGrid products={featuredCollection.products} />
    </FeaturedWrapper>
  );
}