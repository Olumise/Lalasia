import React from 'react'
import Hero from '../homepage/Hero'
import Benefits from '../homepage/Benefits'
import Products from '../homepage/Products'
import About from '../homepage/About'
import Testimonials from '../homepage/Testimonials'
import Articles from '../homepage/Articles'
import Cta from '../ui/Cta'

const Homepage = () => {
  return (
    <div className='max-w-[1400px] mx-auto px-8 py-2 flex flex-col gap-6'>
        <Hero/>
        <Benefits/>
        <Products/>
        <About/>
        <Testimonials/>
        <Articles/>
        <Cta/>
    </div>
  )
}

export default Homepage