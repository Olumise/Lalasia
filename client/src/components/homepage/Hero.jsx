import React from 'react'
import { SearchIcon } from '../icons'
import Button from '../ui/Button'
import HeroImage from '../../assets/hero-image.png'
import Wand from '../../assets/wand.svg'
import Line from '../../assets/line.svg'





const Hero = () => {
  return (
    <div className='relative min-h-dvh p-4 flex flex-col gap-6 justify-center '>
        <div className=' flex flex-col gap-6 w-[70%] mx-auto relative '>
            <img className='absolute top-[20%] right-0 w-14 h-14' src={Wand} alt="" />
            <img className='absolute top-[25%] left-[-5%] w-55 h-55' src={Line} alt="" />

              <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='text-title-100 font-bold text-6xl/20 text-center'>Discover Furniture With High Quality Wood</h1>
            <span className=' w-[70%] text-base text-paragraph-100 text-center'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.</span>
        </div>
        <div>
            <div className='flex gap-4 bg-white py-3 px-4 text-paragraph-100'>
                <div className='w-full flex items-center gap-2'>
                <SearchIcon size={'32'}/>
                <input className='px-2 py-3 w-full border-b border-b-[transparent] text-lg text-title-100 focus:outline-0 focus:border-b focus:border-b-paragraph-100 transition' type="text" placeholder='Search Property' />
                </div>
                <Button children='Search'/>
            </div>
        </div>

        </div>
        <div className='w-full'>
        <img className="h-100 w-full -mt-15 object-cover" src={HeroImage} alt="" />
        </div>
    </div>
  )
}




export default Hero