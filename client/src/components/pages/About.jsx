import React from 'react'
import Hero from '../About/Hero'
import Mission from '../About/Mission'
import Team from '../About/Team'

const About = () => {
  return (
   <div className='max-w-[1400px] mx-auto px-8 py-2 flex flex-col gap-6'>
        <Hero/>
        <Mission/>
        <Team/>
    </div>
  )
}

export default About