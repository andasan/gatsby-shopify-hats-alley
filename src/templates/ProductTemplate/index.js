/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect, useContext } from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery } from 'components'; //absolute path
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

import { Grid, SelectWrapper } from './styles';

import CartContext from 'context/CartContext';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
      title
      description
      images {
        #   forgot to query for the image id
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default function ProductTemplate(props) {
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { getProductById } = useContext(CartContext);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;
  const {
    data: { shopifyProduct },
  } = props;

  useEffect(() => {
    getProductById(shopifyProduct.shopifyId).then(result => {
      // console.log(result);
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, [getProductById, setProduct, shopifyProduct.shopifyId, variantId]);

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(v => v.id === e.target.value);
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`
    );
  };

  return (
    <Layout>
      <Grid>
        <div>
          <ImageGallery
            images={shopifyProduct.images}
            selectedVariantImageId={selectedVariant?.image.id}
          />
        </div>
        <div>
          <h1>{shopifyProduct.title}</h1>
          <div>${selectedVariant?.price}</div>
          <p>{shopifyProduct.description}</p>
          {product?.availableForSale && !!selectedVariant && (
            <SelectWrapper>
              <strong>Variant</strong>
              <select onChange={handleVariantChange} value={selectedVariant.id}>
                {product?.variants.map(v => (
                  <option key={v.id} value={v.id}>
                    {v.title}
                  </option>
                ))}
              </select>
            </SelectWrapper>
          )}
        </div>
      </Grid>
    </Layout>
  );
}
