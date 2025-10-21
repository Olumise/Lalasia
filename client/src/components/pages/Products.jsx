import React, { useState, useEffect } from "react";
import ProductsList from "../product/ProductsList";
import PageLoader from "../ui/PageLoader";
import { API_BASE_URL } from "../../utils/constants";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";



const Products = () => {
	const [searchParams, setSearchParams] = useSearchParams();

async function getProducts() {
	try {
		const res = await fetch(API_BASE_URL + "products" + "?"+ searchParams);
		const products = await res.json();
		return products;
	} catch (err) {
		throw new Error(err.message);
	}
}
	

	const { isPending, isError, data, error } = useQuery({
		queryKey: ["products",  searchParams.toString()],
		queryFn: getProducts,
	});

	if (isPending) {
		return <PageLoader />;
	}
	if (isError) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-xl">{error}</div>
			</div>
		);
	}

	console.log(data)
	return (
		<div className="max-w-[1400px] mx-auto px-8 py-2 flex flex-col gap-6">
			<ProductsList productsList={data} />
		</div>
	);
};

export default Products;
