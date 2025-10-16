import React from 'react'
import Hero from '../homepage/Hero'
import Benefits from '../homepage/Benefits'

const Homepage = () => {
  return (
    <div className='max-w-[1400px] mx-auto px-8 py-2'>
        <Hero/>
        <Benefits/>
    </div>
  )
}

export default Homepage