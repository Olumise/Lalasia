import React from 'react'

const Hero = () => {
  return (
    <section className=" bg-neutral-50 py-16 px-4">
      <div className="h-[calc(100dvh-164px)] mx-auto flex flex-col gap-6 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">
            Services
          </h1>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            The product crafted by talented crafter and using high quality material with love inside
          </p>
        </div>

        <div className="w-full min-h-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=600&fit=crop"
            alt="Modern minimalist living room"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero