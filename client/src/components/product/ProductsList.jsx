import React from 'react'
import { SearchIcon,SortIcon,FilterIcon } from '../icons';
import Button from '../ui/Button';
import ProductCard from '../ui/ProductCard';

const ProductsList = ({productsList}) => {
    return (
    <section className="bg-neutral-50 py-8 px-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={24} />
            <input
              type="text"
              placeholder="Search property"
              className="w-full pl-14 pr-4 py-3 bg-white border border-neutral-200  text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1"
            />
          </div>
          
          <Button Children='Search'/>
          
          <Button Children='Filter' Variant = 'white' Icon={FilterIcon}/>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <h2 className="text-4xl font-bold text-neutral-900">
              Total Product
            </h2>
            <span className="text-base font-medium text-teal-600">
              {productsList.length}
            </span>
          </div>
          
          <button className="flex items-center gap-2 text-neutral-900 hover:text-teal-600 transition-colors">
            <SortIcon size={20} />
            <span className="font-medium">Sort By</span>
          </button>
        </div>
        <div className='grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr)))]'>
          {productsList.map((product)=>{
            return <div className='w-full' key={product.id}>
								<ProductCard
									Name={product.name}
									Category={product.category}
									Image={product.image_url}
									Description={product.description}
									Price={product.price}
								/>
            </div>
          })}

        </div>

      </div>
    </section>
  );
}

export default ProductsList