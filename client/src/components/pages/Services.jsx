import React from 'react'
import Hero from '../services/Hero'
import ServicesList from '../services/ServicesList'
import Articles from '../homepage/Articles'

const Services = () => {
  return (
    <div className='max-w-[1400px] mx-auto px-8 py-2 flex flex-col gap-6'>
        <Hero/>
        <ServicesList/>
        <Articles/>
    </div>
  )
}

export default Services