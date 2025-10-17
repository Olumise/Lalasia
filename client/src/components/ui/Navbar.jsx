import React from "react";
import Logo from "../../assets/Lal-Logo.svg";
import { UserIcon, BagIcon } from "../icons";
import { NavLink } from "react-router";

const Navbar = () => {
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

					<div className="flex items-center gap-4">
						<button className=" group p-2 hover:bg-primary-100 rounded-lg transition-colors cursor-pointer">
							<BagIcon
								size={24}
								className="text-neutral-900 group-hover:text-white transition"
							/>
						</button>
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
