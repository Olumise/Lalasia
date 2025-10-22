import React, { useState } from 'react'
import Stepper from './stepper';
import { X } from 'lucide-react';

const CartItem = ({ id, name='Woven Storage Basket', subtext='Natural organization with rustic charm', price='45.09', quantity='1', image_url='https://images.unsplash.com/photo-1523413184730-e85dbbd04aba?w=1200&q=80', onUpdateQuantity, onRemove }) =>
{
return (
    <div className="w-full flex gap-4 py-6 border-b">
      <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
        <img
          src={image_url}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div className="flex-1">
            <h3 className="text-base font-medium">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{subtext}</p>
          </div>
         <button className='hover:text-gray-500 cursor-pointer' onClick={onRemove}><X size={'18'}/></button>
        </div>

        <div className="flex items-end justify-between mt-4">
         <Stepper currentCount={quantity} onChange={(e)=>onUpdateQuantity(e)}/>
          <p className="text-lg font-semibold">${price}</p>
        </div>
      </div>
    </div>
  );

}
  

export default CartItem