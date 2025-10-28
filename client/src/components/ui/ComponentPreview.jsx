import React from 'react'
import ProductFilter from './ProductFilter'
import Stepper from './stepper'
import CartItem from './CartItem'
import CheckoutForm from '../checkout/CheckoutForm'
import CartSummary from '../checkout/CartSummary'
import Button from './Button'
import { toast } from "sonner"

const ComponentPreview = () => {
  return (
    <div className='bg-white max-w-[90rem] mx-auto flex items-center p-4'>
      
      <Button onClick={()=> toast.success("Event has been created.")}/>
    </div>
  )
}

export default ComponentPreview