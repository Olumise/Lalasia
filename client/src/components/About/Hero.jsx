import React from 'react'

const Hero = () => {
   return (
    <section className="bg-neutral-50 py-16 px-4">
      <div className="h-[calc(100dvh-164px)] mx-auto flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4">
            About Us
          </h1>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            We display products based on the latest products we have, if you want to see our old products please enter the name of the item
          </p>
        </div>

        <div className="w-full min-h-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop"
            alt="Team working together in office"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero