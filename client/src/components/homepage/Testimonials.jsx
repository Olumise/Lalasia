import React from "react";
import QuoteUp from "../../assets/quote-up.svg";
import Star from "../../assets/star.svg";
import testimonials from "../../utils/testimonials";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Testimonials = () => {
	return (
		<div className="flex flex-col gap-6 p-4">
			<div className="flex flex-col gap-4 items-center w-1/2 mx-auto">
				<span className="text-lg text-secondary-100 text-center">
					Testimonials
				</span>
				<h2 className="text-4xl font-semibold text-center ">
					What our customer say
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
					modules={[Autoplay]}>
					{testimonials.map((item) => {
						return (
							<SwiperSlide
								key={item.id}
								style={{ width: "30%" }}>
								<TestimonialCard {...item} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

const TestimonialCard = ({
	Name = "Tolu Diya",
	Text = "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
	Image = "https://picsum.photos/seed/picsum/200/300",
	Rating = "4.5",
}) => {
	return (
		<div className="p-3 bg-white flex flex-col items-star gap-3 rounded-2xl">
			<img
				className="w-6"
				src={QuoteUp}
				alt=""
			/>
			<span className="text-sm text-paragraph-100 ">{Text}</span>
			<div className="flex justify-between ">
				<div className="flex gap-2 items-center">
					<img
						className="w-7 h-7 rounded-full"
						src={Image}
						alt={Name}
					/>
					<h4 className="text-sm font-semibold ">{Name}</h4>
				</div>
				<div className="flex items-center">
					<img
						className="w-4"
						src={Star}
						alt=""
					/>
					<h4 className="text-xs font-semibold ">{Rating}</h4>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
