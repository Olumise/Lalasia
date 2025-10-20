import React, { useState, useEffect } from "react";
import ProductsList from "../product/ProductsList";
import PageLoader from "../ui/PageLoader";
import { API_BASE_URL } from "../../utils/constants";

const Products = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setIsLoading(true);
				const response = await fetch("http://localhost:3100/products");
				const apiProducts = await response.json();
				setIsLoading(false);
				setProductList(apiProducts);
			} catch (err) {
				console.log(err.message);
				setError(err.message);
			}
		};

		fetchProducts();
	}, []);

	if (isLoading) {
		return <PageLoader />;
	} else if (error) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-xl">{error}</div>
			</div>
		);
	} else {
		return (
			<div className="max-w-[1400px] mx-auto px-8 py-2 flex flex-col gap-6">
				<ProductsList productsList={productList} />
			</div>
		);
	}
};

export default Products;
