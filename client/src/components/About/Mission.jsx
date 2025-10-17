import React from 'react'
import Award from '../../assets/award.svg'
import Message from '../../assets/messages.svg'
import Call from '../../assets/call-received.svg'




const Mission = () => {
    

const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '483', label: 'Happy Client' },
    { value: '150+', label: 'Project Finished' }
  ];

  const features = [
    {
      icon:Call,
      title: '24/7 Supports',
      description: '24/7 support means a support service that is provided 24 hours a day and 7 days a week.'
    },
    {
      icon:Message,
      title: 'Free Consultation',
      description: "A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and..."
    },
    {
      icon:Award,
      title: 'Overall Guarantee',
      description: 'The comprehensive guarantee is required for import, warehousing, transit, processing and specific use.'
    }
  ];

  return (
    <section className="bg-neutral-50 py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <p className="text-yellow-500 font-medium mb-4">Our Mission</p>
          <h2 className="text-5xl font-bold text-neutral-900 mb-8 leading-tight">
            Our team dedicated to help find smart home product
          </h2>
          
          <div className="flex gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-neutral-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4">
      <div className='w-15 h-15 rounded-full bg-screen-200 flex items-center justify-center'>
            <img src={icon} alt={title} />
        </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
          {title}
        </h3>
        <p className="text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Mission