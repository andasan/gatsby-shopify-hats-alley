import React, { useContext } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import {
  CartWrapper,
  IconContainer,
  ItemCountContainer,
  TotalPriceContainer,
} from './styles';
import CartContext from 'context/CartContext';

export const Cart = () => {
  const { checkout } = useContext(CartContext);
  //   console.log(checkout);

  let totalQuantity = 0;
  if(checkout){
      checkout.lineItems.forEach(item => {
          totalQuantity+= item.quantity;
      })
  }

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "shopping-bag.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <CartWrapper>
      <IconContainer>
        <Img fixed={data.file.childImageSharp.fixed} />
        <ItemCountContainer>{totalQuantity}</ItemCountContainer>
        <TotalPriceContainer>${checkout?.totalPrice || 0.0}</TotalPriceContainer>
      </IconContainer>
    </CartWrapper>
  );
};
