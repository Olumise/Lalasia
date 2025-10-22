import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../ui/CartItem";
import { updateCart } from "../../redux/cartItems";
import CartSummary from "../ui/CartSummary";
import Button from "../ui/Button";

const CartDetails = () => {
	const cartItems = useSelector((state) => state.cart.value);
	const dispatch = useDispatch();
	let subTotal = 0;
	cartItems
		.map((item) => item.price * item.quantity)
		.forEach((element) => {
			return (subTotal += element);
		});

	function removeCartItem(id) {
		const updatedCartItems = cartItems.filter((item) => item.id !== id);
		localStorage.setItem("cart-items", JSON.stringify(updatedCartItems));
		dispatch(updateCart(updatedCartItems));
		alert("Product successfully removed!");
	}

	function updateCartItem(id, key, value) {
		const updatedCartItems = cartItems.map((item) =>
			item.id === id ? { ...item, [key]: value } : item
		);
		localStorage.setItem("cart-items", JSON.stringify(updatedCartItems));
		dispatch(updateCart(updatedCartItems));
		alert("Product successfully updated!");
	}

	return (
		<section className="py-8 px-4">
			<div className="flex gap-4 flex-wrap">
				<div className="p-2 px-5 flex flex-col items-center  bg-white border border-gray-200 rounded-2xl flex-2">
					{cartItems.length > 0 ? (
						cartItems.map((item) => {
							return (
								<CartItem
									key={item.id}
									{...item}
									onRemove={() => removeCartItem(item.id)}
									onUpdateQuantity={(newQuantity) =>
										updateCartItem(item.id, "quantity", newQuantity)
									}
								/>
							);
						})
					) : (
						<div className="w-full flex flex-col items-center justify-center gap-3 h-full">
							<h3 className="text-base font-medium text-center">No Product have been added to cart.</h3>
							<a href="/products">
							<Button Children="View Products"/>
							
							</a>
						</div>
					)}
					{}
				</div>
				<div className="min-w-100 w-full flex flex-1">
					<CartSummary subtotal={subTotal} />
				</div>
			</div>
		</section>
	);
};

export default CartDetails;
