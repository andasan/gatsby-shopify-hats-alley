import React from 'react';
import { QuantityAdjustWrapper, AdjustButton } from './styles';

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
      <AdjustButton onClick={handleDecrementQuantity} className="down"
        aria-label="-" />
      <div>{quantity}</div>
      <AdjustButton onClick={handleIncrementQuantity} className="up"
        aria-label="+" />
    </QuantityAdjustWrapper>
  );
}