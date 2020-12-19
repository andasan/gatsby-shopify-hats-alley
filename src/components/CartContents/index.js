import React, { useContext } from 'react';
import CartContext from 'context/CartContext';
import { navigate } from '@reach/router';

import { CartHeader, CartItem, CartFooter, Footer, EmptyCart } from './styles';

import { Button } from '../Button';
import { RemoveCartItem } from '../RemoveCartItem';
import { QuantityAdjust} from '../QuantityAdjust';

export const CartContents = () => {
  const { checkout, updateLineItem } = useContext(CartContext);
  const handelAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };
  return (
    <section>
      <h1>Your Cart</h1>
      <CartHeader>
        <div>Product</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Amount</div>
      </CartHeader>
      {checkout?.lineItems?.map(item => (
        <CartItem key={item.variant.id}>
          <div>
            <div>{item.title}</div>
            <div>
              {item.variant.title === 'Default Title' ? '' : item.variant.title}
            </div>
          </div>
          <div>${item.variant.price}</div>
          <div><QuantityAdjust item={item} onAdjust={handelAdjustQuantity} /></div>
          <div>${(item.quantity * item.variant.price).toFixed(2)}</div>
          <div><RemoveCartItem lineItemId={item.id} /></div>
        </CartItem>
      ))}
      {!!checkout?.lineItems && (
        <CartFooter>
          <div>
            <strong>Total: </strong>
          </div>
          <div>
            <span>${checkout?.totalPrice}</span>
          </div>
        </CartFooter>
      )}
      {!checkout?.lineItems?.length > 0 && <EmptyCart>Your cart is empty.</EmptyCart>}
      <Footer>
        <div>
          <Button onClick={() => navigate(-1)}>Continue Shopping</Button>
        </div>
        <div>
          {!!checkout?.webUrl && (
            <Button
              onClick={() => {
                window.location.href = checkout.webUrl;
              }}
            >
              Checkout
            </Button>
          )}
        </div>
      </Footer>
    </section>
  );
};
