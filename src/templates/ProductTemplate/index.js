import React from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery } from 'components'; //absolute path

import { Grid } from './styles';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      title
      id
      description
      images {
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
  const {
    data: { shopifyProduct },
  } = props;
  return (
    <Layout>
      <Grid>
        <div>
            <ImageGallery images={shopifyProduct.images} />
        </div>
        <div>
          <h1>{shopifyProduct.title}</h1>
        </div>
      </Grid>
    </Layout>
  );
}
