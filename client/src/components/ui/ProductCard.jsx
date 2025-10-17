import { Eye, ArrowBigDown } from 'lucide-react';
import Button from './Button';
import { useState } from 'react';


const ProductCard = ({
    Name='Wooden Bookshelf',
    Category ='Living Room',
    Image ='https://picsum.photos/id/237/200/300',
    Description='Combination of wood and wool',
    Price = '89.50'
}) =>{

    const [isHovered, setIsHovered] = useState(false)

    return(
        <div className=' flex flex-col gap-4' onMouseEnter={()=> setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative">

                {isHovered ? 
                <div className=" absolute h-full flex justify-center items-center p-4 w-full bg-[#0000006A]">
                    <Button Variant='primary' Children = 'View Details' Icon={Eye}/>
                </div>
                : null}
                
                <img className='w-full h-70 object-cover' src={Image} alt={Name} />
            </div>
            <div>
                <span className='text-paragraph-100 text-sm'>{Category}</span>
                <h3 className='text-lg font-semibold'>{Name}</h3>
                <span className='text-sm text-title-300'>{Description}</span>
            </div>
            <h4 className='text-lg font-semibold'>${Price}</h4>
        </div>
    )
}

export default ProductCard