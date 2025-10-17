import React from 'react'
import Button from './Button'
import { ArrowRight } from 'lucide-react'

const Cta = ({
    Title='Nice, do you want a Discout?',
    ButtonText='Come get it'
}) => {
  return (
    <div className='p-4 flex flex-row gap-2 items-center justify-between'>
        <h3 className=" flex-1 text-2xl text-black font-semibold">{Title}</h3>
        <Button Children={ButtonText} Icon={ArrowRight}/>
    </div>
  )
}

export default Cta