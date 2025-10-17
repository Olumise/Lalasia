import React from 'react'
import Button from '../ui/Button'

const About = () => {
  return (
    <div className='p-4 flex flex-col gap-10'>
         <div className='flex flex-1 flex-row gap-10 items-end justify-end'>
            <div className='flex flex-col flex-1 gap-4'>
                <span className='text-lg text-secondary-100'>Our Product</span>
                <h2 className='text-4xl font-semibold w-2/3'>Crafted by talented and high quality material</h2>
            </div>
            <div className='flex-1 flex justify-end gap-12'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl font-semibold '>02</h2>
                    <p className='flex-1 text-sm text-paragraph-100'>Years Experience</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl font-semibold '>483</h2>
                    <p className='flex-1 text-sm text-paragraph-100'>Years Experience</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl font-semibold '>150+</h2>
                    <p className='flex-1 text-sm text-paragraph-100'>Years Experience</p>
                </div>
            </div>
        </div>
        <div className='flex gap-10 flex-row h-120 items-stretch'>
            <div className='flex-1 flex flex-col gap-4 h-full'>
                <p className='text-base text-paragraph-100'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient. morbi fermentum, vivamus et accumsan dui tincidunt pulvinar</p>
                <Button Children='Contact Us'/>
                <img className='h-70 w-full flex-1 object-cover' src="https://images.unsplash.com/photo-1572048572872-2394404cf1f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVjb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900" alt="" />

            </div>
            <div className='flex-1 h-full bg-black '>
                <img className='h-full' src="https://images.unsplash.com/photo-1572048572872-2394404cf1f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVjb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About