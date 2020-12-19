import React from 'react';
import { QuantityAdjustWrapper } from './styles';

import { Stepper } from '../Stepper';

export function QuantityAdjust({ item, onAdjust }) {
  const { quantity } = item;

  const handleDecrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: -1 });
  };

  const handleIncrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: 1 });
  };

  return (
    <QuantityAdjustWrapper>
      <Stepper onClick={handleDecrementQuantity} className="down"
        aria-label="-" />
      <div>{quantity}</div>
      <Stepper onClick={handleIncrementQuantity} className="up"
        aria-label="+" />
    </QuantityAdjustWrapper>
  );
}