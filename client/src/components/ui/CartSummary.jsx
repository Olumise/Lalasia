import React from 'react'
import Button from './Button';

const CartSummary = ({ subtotal,onCheckout }) => {
  const fee = subtotal * 0.15
  const total = subtotal + fee ;

  return (
    <div className="rounded-lg bg-card p-6 border">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2) || 0 }</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Fee (15%)</span>
          <span className="font-medium">${fee.toFixed(2) || 0}</span>
        </div>
      
        <div className="pt-3 border-t">
          <div className="flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="text-xl font-semibold">${total.toFixed(2) || 0}</span>
          </div>
        </div>
      </div>

      <Button className={'w-full'} Children='Proceed to Checkout' onClick={onCheckout}/>

      <p className="mt-4 text-xs text-center text-muted-foreground">
        Fees are collected to process your order.
      </p>
    </div>
  );
};

export default CartSummary