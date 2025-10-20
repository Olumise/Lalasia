import React, { useState } from "react";
import { X } from "lucide-react";
import SelectDropdown from "./SelectDropdown";
import Button from "./Button";
import { Switch } from "@/components/ui/switch";
import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../../utils/constants";
import PageLoader from "./PageLoader";

async function getFilters() {
		try {
			const res = await fetch(API_BASE_URL + "categories");
			const categories = await res.json();
      console.log(categories);
			return categories;
		} catch (err) {
			throw new Error(err.message);
		}
	}

const ProductFilter = () => {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ["categories"],
		queryFn: getFilters,
	});


  const [category, setCategory] = useState()
  const [priceRange, setPriceRange] = useState()
  const [isFeatured, setFeatured] = useState(false)
  const [inStock, setInStock] = useState(false)


if(isPending){
  return <PageLoader/>
}

if(isError){
  return <div>{error}</div>
}

if(data){
  const categoryFilters = data.category
  const priceRangeFilters = data.price

return (
		<div className="w-[25rem] p-4 bg-white shadow-xs border border-paragraph-500 flex flex-col gap-6">
      <span>{`category:${category}, in-stock:${inStock}, featured:${isFeatured}, price-range:${priceRange}`}</span>
			<div className="flex flex-row justify-between">
				<h3 className="text-lg font-medium">Filters</h3>
				<X />
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<span className="text-sm font-medium">Category</span>
          <SelectDropdown
						dropdownValues={categoryFilters.list.map((item) => {
							return {
								text: item,
								value: item,
							};
						})}
            placeholder="Select Category"
            setValue={(e)=>setCategory(e)}
            value={priceRange}
					/>
					
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-sm font-medium">Price Range</span>
					<SelectDropdown
						dropdownValues={priceRangeFilters.list.map((item) => {
							return item
						})}
            placeholder="Select Price Range"
            setValue={(e)=>setPriceRange(e)}
            value={category}
					/>
				</div>
				<div className=" flex items-center justify-between gap-2">
					<span className="text-sm font-medium items-center">
						Featured Only
					</span>
					<Switch 
          className='data-[state=checked]:bg-primary-100'
          checked={isFeatured}
          onCheckedChange={setFeatured}
          />
				</div>
				<div className=" flex items-center justify-between gap-2">
					<span className="text-sm font-medium items-center">
						In Stock Only
					</span>
					<Switch
          className='data-[state=checked]:bg-primary-100'
          checked={inStock}
          onCheckedChange={setInStock} />
				</div>
			</div>
			<div className="flex gap-2 justify-end">
				<Button
        
					Variant="white"
					Children="Reset Filters"
				/>
				<Button Children="Apply Filters" />
			</div>
		</div>
	);
};
}


export default ProductFilter;
