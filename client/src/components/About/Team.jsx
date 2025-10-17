import React from 'react'
import teamMembers from '../../constants/TeamMembers';

const Team = () => {
  return (
    <section className="bg-neutral-50 py-16 px-4">
      <div className="mb-12">
        <p className="text-yellow-500 font-medium mb-4">Our Team</p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="text-5xl font-bold text-neutral-900 leading-tight max-w-xl">
            Meet our leading and strong team
          </h2>
          <p className="text-neutral-400 max-w-md">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
}

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-neutral-900 mb-1">
        {name}
      </h3>
      <p className="text-neutral-400 text-sm">
        {role}
      </p>
    </div>
  );
};


export default Team