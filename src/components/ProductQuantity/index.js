import React, { useState, useContext } from 'react';

import { FormWrapper, QuantityInput, StepperButton } from './styles';

import { Button } from '../Button';
import CartContext from 'context/CartContext';

export const ProductQuantity = ({ variantId, available }) => {
  const [quantity, setQuantity] = useState(0);

  const { updateLineItem } = useContext(CartContext);

  const handleQuantity = value => {
    const radixed = parseInt(value, 10); // 07 ---> 7
    setQuantity(radixed);
  };

  const submitHandler = e => {
    e.preventDefault();
    updateLineItem({
        variantId,
        quantity
    })
  };

  return (
    <FormWrapper onSubmit={submitHandler}>
      <QuantityInput
        disabled={!available}
        type="number"
        value={quantity}
        onChange={e => handleQuantity(e.target.value)}
      />
      <StepperButton
        disabled={!available}
        type="button"
        onClick={() => handleQuantity(quantity + 1)}
        onKeyDown={() => handleQuantity(quantity + 1)}
        className="up"
        aria-label="+"
      />
      <StepperButton
        disabled={!available}
        type="button"
        onClick={() => handleQuantity(quantity - 1)}
        onKeyDown={() => handleQuantity(quantity - 1)}
        className="down"
        aria-label="-"
      />
      <Button type="submit" disabled={!available}>
        Add to Cart
      </Button>
    </FormWrapper>
  );
};
