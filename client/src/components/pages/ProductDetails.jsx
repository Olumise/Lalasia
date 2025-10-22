import React, { useEffect } from "react";
import ProductItem from "../product-item/ProductItem";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import PageLoader from "../ui/PageLoader";
import { API_BASE_URL } from "../../utils/constants";
import RelatedProducts from "../product-item/RelatedProducts";

const ProductDetails = () => {
	const { product } = useParams();

	async function getProduct() {
		try {
			const res = await fetch(API_BASE_URL + "product/" + product);
			const productItem = await res.json();

			return productItem;
		} catch (err) {
			throw new Error(err.message);
		}
	}
	async function getAllProducts() {
		try {
			const res = await fetch(API_BASE_URL + "products" + '?list=4&current_product=' + product);
			const products = await res.json();

			return products;
		} catch (err) {
			throw new Error(err.message);
		}
	}
	const productQuery = useQuery({
		queryKey: ["product-item", product],
		queryFn: getProduct,
	});

  const allProductsQuery = useQuery({
		queryKey: ['products'],
		queryFn: getAllProducts,
	});

  const {isLoading:isProductLoading, data:productData, isError, error} = productQuery
  const {isLoading:isAllProductsLoading, data: allProductData} = allProductsQuery



	if (isProductLoading || isAllProductsLoading) {
		return <PageLoader />;
	}

	if (isError) {
		return <div>{error}</div>;
	}

	return (
		<div className="max-w-[1400px] mx-auto px-8 py-2 flex flex-col gap-6">
			<ProductItem product={productData} />
    
			<RelatedProducts productsList={allProductData} />
		</div>
	);
};

export default ProductDetails;
