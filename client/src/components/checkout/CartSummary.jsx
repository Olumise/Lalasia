import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Lock } from 'lucide-react';
import Button from '../ui/Button';

const CartSummary = () => {
    const cartItems = useSelector(state => state.cart.value)

    const [promoCode, setPromoCode] = useState(0)

    console.log(cartItems)
    let subTotal = 0;
    cartItems
        .map((item) => item.price * item.quantity)
        .forEach((element) => {
            return (subTotal += element);
        });
    const fee = subTotal * 0.15
    const total = subTotal + fee;

    return (
        <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-sm border">
            <h2 className="text-lg font-semibold mb-8">Order Summary</h2>

            <div className="space-y-6 mb-8">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-4xl relative">
                            <img className='h-full w-full object-cover rounded-lg' src={item.image_url} alt="" />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center"> <span className='text-white text-sm'>{item.quantity}</span></div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-base text-gray-900">${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Fee (15%)</span>
                    <span className="font-medium">${fee.toFixed(2)}</span>
                </div>

                <div className="pt-3 border-t">
                    <div className="flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="text-xl font-semibold">${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <Button className={'w-full'} children='Proceed to Checkout' />

                <p className="text-xs text-center text-muted-foreground">
                    Fees are collected to process your order.
                </p>
            </div>
        </div>
    );
}

export default CartSummary