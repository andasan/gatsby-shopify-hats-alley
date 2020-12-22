import { graphql } from 'gatsby';

export const ProductFields = graphql`
  fragment ShopiftProductFields on ShopifyProduct {
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
`;
