import React from 'react'
import { Eye } from 'lucide-react';
import { twMerge } from 'tailwind-merge'

const Button =({
  children = "Button",
  Variant = 'primary',
  Icon,
  onClick,
  className,
  disabled

}) =>{

  const Variants = {
  primary : ' bg-primary-100 text-white hover:bg-black',
  secondary: 'bg-secondary-100 text-black hover:bg-white',
  white: 'bg-white text-black bg-white border border-neutral-200  hover:bg-black hover:text-white',
  black: 'bg-black text-white hover:bg-white'

 }

  return (
    <button className={twMerge('group flex justify-center items-center gap-2 py-3 px-6 min-w-[150px] h-fit cursor-pointer transition', Variants[Variant], disabled && 'cursor-not-allowed bg-gray-400 text-white pointer-events-none ' ,className) } onClick={onClick}>
      {children} {Icon ? <Icon size={'18'}/> : null }
      </button>
  )
}
 

export default Button