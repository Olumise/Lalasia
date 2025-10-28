import React, { useState } from "react";
import { data } from "react-router";
import Button from "../ui/Button";
import Stepper from "../ui/stepper";
import PillButton from "../ui/PillButton";
import {useSelector, useDispatch} from 'react-redux'
import { updateCart } from "../../redux/cartItems";
import { toast } from "sonner"


const ProductItem = ({ product }) => {
	const { name, image_url, description, subtext, price, variations } = product;
	const [selectedColor, setSelectedColor] = useState(variations.color[0].name);
	const [showFullDescription, setShowFullDescription] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [size, setSize] = useState(variations.size[0]);
  const dispatch = useDispatch()
  

	function addToCart() {
		const newCartItem = { ...product, selectedColor, quantity, size };
		let cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
		cartItems = cartItems.filter((item) => item.id !== product.id);
		cartItems.push(newCartItem);
		localStorage.setItem("cart-items", JSON.stringify(cartItems));
    dispatch(updateCart(cartItems))
	toast.success("Added to cart successfully!");
	}

	return (
		<section className="bg-neutral-50 py-8 px-4">
			<div className=" min-h-150 h-0 grid grid-cols-1 items-center lg:grid-cols-2 gap-8">
				<div className=" rounded-lg overflow-hidden h-full">
					<img
						src={image_url}
						alt={name}
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="flex flex-col gap-6">
					<div>
						<h1 className="text-4xl font-bold text-neutral-900 mb-3">{name}</h1>
						<p className="text-neutral-400 text-base">{subtext}</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-neutral-900 mb-3">
							Color: {selectedColor}
						</h3>
						<div className="flex gap-0">
							{variations.color.map((item, index) => (
								<button
									key={index}
									onClick={() => setSelectedColor(item.name)}
									className={`w-12 h-12 transition-all cursor-pointer`}
									style={{ backgroundColor: item.hex }}
									aria-label={item.name}
								/>
							))}
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-neutral-900 mb-3">
							Size: {size}
						</h3>
						<div className="flex gap-1">
							{variations.size.map((item) => {
								return (
									<PillButton
										text={item}
										selected={item === size}
										onClick={() => setSize(item)}
									/>
								);
							})}
						</div>
					</div>

					<div>
						<p
							className={`text-neutral-400 leading-relaxed text-sm ${
								showFullDescription ? null : "line-clamp-3"
							}`}>
							{description}
						</p>
						<button
							className="text-teal-600 text-sm font-medium hover:underline cursor-pointer"
							onClick={() => setShowFullDescription(!showFullDescription)}>
							{showFullDescription ? "Show Less" : "Show More"}
						</button>
					</div>

					<div>
						<p className="text-3xl font-bold text-neutral-900">${price}</p>
					</div>

					<div className="flex items-center flex-row gap-2">
						<h3 className="text-lg font-semibold text-neutral-900">
							Quantity:
						</h3>
						<Stepper
							currentCount={quantity}
							onChange={(e) => setQuantity(e)}
						/>
					</div>

					<div className="flex gap-4">
						<Button
							className={"w-full"}
							children="Buy Now"
						/>
						<Button
							Variant="white"
							className={"w-full"}
							children="Add to Cart"
							onClick={() => addToCart()}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductItem;
