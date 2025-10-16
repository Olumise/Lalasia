import React, { Children } from 'react'

function Button({
    Children = "Button"
}) {
  return (
    <button className='py-3 px-6 min-w-[150px] bg-primary-100 text-white hover:bg-black cursor-pointer transition'>{Children}</button>
  )
}

export default Button