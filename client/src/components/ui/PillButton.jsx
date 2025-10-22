import React from "react";
import { twMerge } from "tailwind-merge";

const PillButton = ({ text = "Button", selected, onClick }) => {
	return (
		<button
			className={twMerge(
				"py-1 px-4 border border-gray-200 rounded-full text-sm hover:bg-primary-100 hover:text-white transition cursor-pointer",
				selected && "bg-primary-100 text-white hover:bg-black"
			)}
            onClick={onClick}>
			{text}
		</button>
	);
};

export default PillButton;
