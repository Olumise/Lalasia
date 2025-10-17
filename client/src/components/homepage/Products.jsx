import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import ProductCard from "../ui/ProductCard";
import { ChevronRightIcon } from "../icons";



function Products({productsList}) {
	
	return (
		<div className="flex flex-col gap-6 p-4">
			<div className="flex flex-col gap-4 items-center w-1/2 mx-auto">
				<span className="text-lg text-secondary-100 text-center">Benefits</span>
				<h2 className="text-4xl font-semibold text-center ">
					Benefits when using our services
				</h2>
				<p className="flex-1 text-base text-paragraph-100 text-center">
					Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
					placerat nisi, adipiscing mauris non purus parturient.
				</p>
			</div>

			<div className="relative">
				<Swiper
					className="w-full"
					spaceBetween={30}
					slidesPerView={"auto"}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					grabCursor={true}
					loop={true}
					navigation={{
						nextEl: ".pslider-next",
						prevEl: ".pslider-prev",
					}}
					modules={[Navigation, Autoplay]}>
					{productsList.map((product) => {
						return (
							<SwiperSlide
								key={product.id}
								style={{ width: "30%" }}>
								<ProductCard
									Name={product.name}
									Category={product.category}
									Image={product.image_url}
									Description={product.description}
									Price={product.price}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>

				<div className="absolute top-[50%] w-full z-1 flex justify-between px-4">
					<button className="pslider-prev flex items-center justify-center  p-3 bg-[#0000007A] rounded-full text-white rotate-180 cursor-pointer">
						{" "}
						<ChevronRightIcon />{" "}
					</button>
					<button className="pslider-next flex items-center justify-center  p-3 bg-[#0000007A] rounded-full text-white cursor-pointer">
						{" "}
						<ChevronRightIcon />{" "}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Products;
