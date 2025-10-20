import React, { useEffect, useState } from "react";
import Hero from "../homepage/Hero";
import Benefits from "../homepage/Benefits";
import Products from "../homepage/Products";
import About from "../homepage/About";
import Testimonials from "../homepage/Testimonials";
import Articles from "../homepage/Articles";
import Cta from "../ui/Cta";
import PageLoader from "../ui/PageLoader";
import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL } from "../../utils/constants";

const fetchProducts = async () => {
	try {
		const response = await fetch(API_BASE_URL + "products");
		const apiProducts = await response.json();
		return apiProducts;
	} catch (err) {
		console.log(err.message);
	}
};

const Homepage = () => {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ["data"],
		queryFn: () => fetchProducts(),
	});

	if (isPending) {
		return <PageLoader />;
	}

	if (isError) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-xl">{error.message}</div>
			</div>
		);
	}
	return (
		<div className="max-w-[1400px] mx-auto px-8 py-2 flex flex-col gap-6">
			<Hero />
			<Benefits />
			<Products productsList={data} />
			<About />
			<Testimonials />
			<Articles />
			<Cta />
		</div>
	);
};

export default Homepage;
