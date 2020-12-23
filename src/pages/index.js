import React, {useContext} from 'react';
import { useLocation } from '@reach/router';
import {
  Layout,
  SEO,
  HomepageCollections,
  FeaturedProducts,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  const { pathname } = useLocation();
  return (
    <Layout path={pathname}>
      <SEO description="HatsAlley Homepage" title="HatsAlley Homepage" />
      <HomepageCollections
        collections={
          collections.filter(
            collection => collection.title !== 'Featured Hats'
          ) || []
        }
      />
      {!!collections.find(
        collection => collection.title === 'Featured Hats'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;