import React, { useState, useContext } from 'react';

import { FormWrapper, QuantityInput } from './styles';

import { Button } from '../Button';
import { Stepper } from '../Stepper';
import CartContext from 'context/CartContext';

export const ProductQuantity = ({ variantId, available }) => {
  const [quantity, setQuantity] = useState(0);

  const { updateLineItem } = useContext(CartContext);

  const handleQuantity = value => {
    const radixed = parseInt(value, 10); // 07 ---> 7
    setQuantity(Math.max(0, radixed)); //set min to 0 and max to any input value
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
      <Stepper
        disabled={!available}
        type="button"
        onClick={() => handleQuantity(quantity + 1)}
        onKeyDown={() => handleQuantity(quantity + 1)}
        className="up"
        aria-label="+"
      />
      <Stepper
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
