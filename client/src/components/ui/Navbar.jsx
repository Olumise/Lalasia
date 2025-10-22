import React from "react";
import Logo from "../../assets/Lal-Logo.svg";
import { UserIcon, BagIcon } from "../icons";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
	const cartItems = useSelector(state => state.cart.value)
	
	const menuStyle =
		"text-neutral-900 hover:text-teal-600 hover:underline hover:underline-offset-30 transition";
	return (
		<header className="bg-white border-b border-neutral-200">
			<div className="max-w-[1400px] mx-auto px-8 py-4">
				<div className="flex items-center justify-between">
					<NavLink
						to="/"
						end>
						<div className="flex items-center gap-2">
							<img
								src={Logo}
								alt="Lalasia Logo"
							/>
							<span className="text-xl font-semibold text-neutral-900">
								Lalasia
							</span>
						</div>
					</NavLink>

					<nav className="flex items-center gap-8">
						<NavLink
							className={`${menuStyle}`}
							to="/products"
							end>
							Product
						</NavLink>

						<NavLink
							className={`${menuStyle}`}
							to="/services"
							end>
							Services
						</NavLink>

						<NavLink
							className={`${menuStyle}`}
							to="/articles"
							end>
							Articles
						</NavLink>

						<NavLink
							className={`${menuStyle}`}
							to="/about"
							end>
							About Us
						</NavLink>
					</nav>

					<div className="relative flex items-center gap-4">
						<a href="/cart">
						<button className=" group p-2 hover:bg-primary-100 rounded-lg transition-colors cursor-pointer">
							<BagIcon
								size={24}
								className="text-neutral-900 group-hover:text-white transition"
							/>
							{cartItems.length > 0 && <span className="absolute top-1 bg-white border border-gray-200 w-4 h-4 rounded-full text-[10px] ">{cartItems.length}</span>}
							
						</button>
						</a>
						<button className="group p-2 hover:bg-primary-100 rounded-lg transition-colors cursor-pointer">
							<UserIcon
								size={24}
								className="text-neutral-900 group-hover:text-white transition"
							/>
							
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
