import React from 'react'
import ProductCard from '../ui/ProductCard';

const RelatedProducts = ({productsList}) => {
  return (
    <div>
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr)))]">
					{productsList.map((product) => {
						return (
							<div
								className="w-full"
								key={product.id}>
								<ProductCard
									Name={product.name}
									Category={product.category}
									Image={product.image_url}
									Description={product.description}
									Price={product.price}
                  slug={product.slug}
								/>
							</div>
						);
					})}
				</div>
    </div>
  )
}

export default RelatedProducts