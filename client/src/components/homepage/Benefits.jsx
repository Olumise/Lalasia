import React from 'react'
import ManyChoices from '../../assets/3square.svg'
import OnTime from '../../assets/calendar-tick.svg'
import Price from '../../assets/money-tick.svg'


function Benefits() {
  return (
    <div className='p-4 flex flex-col gap-5'>
        <div className='flex flex-row gap-70 items-center justify-center'>
            <div className='flex flex-col flex-1 gap-4'>
                <span className='text-lg text-secondary-100'>Benefits</span>
                <h2 className='text-4xl font-semibold '>Benefits when using our services</h2>
            </div>
            <p className='flex-1 text-base text-paragraph-100'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</p>
        </div>
        <div className='grid grid-cols-3 gap-8'>
            <Card Icon={ManyChoices} Title='Many Choices' Subtext='Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. '/>
            <Card Icon={OnTime} Title='Fast and On Time' Subtext='Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. '/>
            <Card Icon={Price} Title='Affordable Price' Subtext='Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. '/>

        </div>
    </div>
  )
}

function Card({
    Icon = OnTime,
    Title= 'Oya Na',
    Subtext= "This is working"
}) {
  return (
    <div className='py-7 px-6 rounded-2xl bg-white flex flex-col gap-6'>
        <div className='w-12 h-12 rounded-full bg-screen-200 flex items-center justify-center'>
            <img src={Icon} alt={Title} />
        </div>
        <div className='flex flex-col gap-2'>
            <h3 className='text-2xl font-semibold'>{Title}</h3>
            <span className='text-base text-paragraph-100'>{Subtext}</span>
        </div>

    </div>
  )
}

export default Benefits