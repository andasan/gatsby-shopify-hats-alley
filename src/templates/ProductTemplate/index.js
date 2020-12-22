/* eslint-disable jsx-a11y/no-onchange */
import React, { useState, useEffect, useContext } from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery, ProductQuantity } from 'components'; //absolute path
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

import {
  Grid,
  SelectWrapper,
  SingleProduct,
  SingleProductPrice,
} from './styles';

import CartContext from 'context/CartContext';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
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
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
      setSelectedVariant(prevState => ({
        ...prevState,
        price: `$${prevState.price}`,
      }));
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
        <SingleProduct>
          <h3>{shopifyProduct.title}</h3>
          {!!selectedVariant && (
            <SingleProductPrice>{selectedVariant?.price}</SingleProductPrice>
          )}
          <p>{shopifyProduct.description}</p>
          <hr />
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (
                <SelectWrapper>
                  <strong>Variant</strong>
                  <label htmlFor="select-variant">
                    <select
                      id="select-variant"
                      onChange={handleVariantChange}
                      value={selectedVariant.id}
                    >
                      {product?.variants.map(v => (
                        <option key={v.id} value={v.id}>
                          {v.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </SelectWrapper>
              )}
            </>
          )}
          {!!selectedVariant && (
            <ProductQuantity
              variantId={selectedVariant?.id}
              available={product?.availableForSale}
            />
          )}
        </SingleProduct>
      </Grid>
    </Layout>
  );
}
