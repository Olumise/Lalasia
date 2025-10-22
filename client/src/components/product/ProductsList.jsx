import React, { useEffect, useState } from "react";
import { SearchIcon, SortIcon, FilterIcon } from "../icons";
import Button from "../ui/Button";
import ProductCard from "../ui/ProductCard";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import ProductFilter from "../ui/ProductFilter";
import { useSearchParams } from "react-router";
import { isPresent } from "../../utils/helper";

const ProductsList = ({ productsList }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchText, setSearchText] = useState(
		searchParams.get("search") || ""
	);

	function setSearchQuery() {
		const queryParams = new URLSearchParams();
		if (isPresent(searchText)) {
			queryParams.set("search", searchText);
		} else {
			queryParams.delete("search");
		}
		setSearchParams(queryParams);
	}

	return (
		<section className="bg-neutral-50 py-8 px-4">
			
			<div className="flex flex-col gap-8">
				<div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
					<form
						className="w-full flex items-center "
						onSubmit={(e) => {
							e.preventDefault();
							setSearchQuery();
						}}>
						<div className="flex-1 relative">
							<SearchIcon
								className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
								size={24}
							/>
							<input
								type="text"
								placeholder="Search property"
								className="w-full pl-14 pr-4 py-3 bg-white border border-neutral-200  text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-100 transition"
								onInput={(e) => setSearchText(e.target.value)}
								value={searchText}
							/>
						</div>

						<Button Children="Search" />
					</form>

					<Popover>
						<PopoverTrigger>
              <div className="relative">
                {searchParams.size ? <div className=" absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-xs">{searchParams.size}</div> : null}
              <Button
								Children="Filter"
								Variant="white"
								Icon={FilterIcon}
							/>
              </div>
							
						</PopoverTrigger>
						<PopoverContent
							className="p-0 mt-5 border-0 w-fit"
							align="end">
							<ProductFilter />
						</PopoverContent>
					</Popover>
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
		</section>
	);
};

export default ProductsList;
