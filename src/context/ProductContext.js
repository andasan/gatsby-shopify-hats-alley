import React, {createContext} from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    allShopifyCollection {
      edges {
        node {
          products  {
            ...ShopiftProductFields
          }
          title
          description
          shopifyId
          image{
            localFile{
              childImageSharp{
                fluid(maxWidth: 1200){
                   ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

const defaultState = {
  products: [],
};

const ProductContext = createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const {allShopifyCollection} = useStaticQuery(query)
  return (
    <ProductContext.Provider
      value={{
        products: [],
        collections: allShopifyCollection.edges.map(({ node }) => node) || [],
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
