import React from 'react'
import CheckoutForm from '../checkout/CheckoutForm'
import CartSummary from '../checkout/CartSummary'

const Checkout = () => {
  return (
    <div className='max-w-[1400px] mx-auto px-8 py-8 flex flex-col gap-6'>
       <CheckoutForm/>
      
    </div>
  )
}

export default Checkout