import React from 'react'
import services from '../../constants/Services';

const ServicesList = () => {
  return (
    <section className="bg-neutral-50 py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {services.map((service) => (
          <ServiceCard
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

const ServiceCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-5xl font-bold text-primary-100 mb-4">
        {number}
      </h2>
      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
        {title}
      </h3>
      <p className="text-neutral-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServicesList