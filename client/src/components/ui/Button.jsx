import React, { Children } from 'react'
import { Eye } from 'lucide-react';

const Button =({
  Children = "Button",
  Variant = 'primary',
  Icon,

}) =>{

  const Variants = {
  primary : ' bg-primary-100 text-white hover:bg-black',
  secondary: 'bg-secondary-100 text-black hover:bg-white',
  white: 'bg-white text-black hover:bg-primary-100',
  black: 'bg-black text-white hover:bg-white'

 }

  return (
    <button className={`flex justify-center items-center gap-2 py-3 px-6 min-w-[150px] h-fit ${Variants[Variant]} cursor-pointer transition`}>
      {Children} {Icon ? <Icon size={'18'}/> : null } 
      </button>
  )
}
 

export default Button