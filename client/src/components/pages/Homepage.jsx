import React, { useEffect, useState } from "react";
import Hero from "../homepage/Hero";
import Benefits from "../homepage/Benefits";
import Products from "../homepage/Products";
import About from "../homepage/About";
import Testimonials from "../homepage/Testimonials";
import Articles from "../homepage/Articles";
import Cta from "../ui/Cta";
import PageLoader from "../ui/PageLoader";



const Homepage = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [productList, setProductList] = useState([])

  useEffect(()=>{
    const fetchProducts = async () => {
	try {
    setIsLoading(true)
		const response = await fetch("http://localhost:3100/products");
		const apiProducts = await response.json();
		setIsLoading(false)
    setProductList(apiProducts)
    console.log(apiProducts)
	  }catch (err) {
      console.log(err.message);
      setError(err.message)
	}
  };

  fetchProducts()
  },[])

  if(isLoading){
    return <PageLoader/>
  }else if(error){
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-xl">{error}</div>
    </div>
  }
    
    {
    return (
		<div className="max-w-[1400px] mx-auto px-8 py-2 flex flex-col gap-6">
			<Hero />
			<Benefits />
			<Products productsList={productList}/>
			<About />
			<Testimonials />
			<Articles />
			<Cta />
		</div>
	);
  }

	
};

export default Homepage;
